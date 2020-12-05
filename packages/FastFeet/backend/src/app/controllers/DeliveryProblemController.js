import * as Yup from 'yup';
import Queue from '../../lib/Queue';
import Delivery from '../models/Delivery';
import DeliveryProblem from '../models/DeliveryProblem';
import DeliveryCancellationMail from '../jobs/DeliveryCancellationMail';
import Deliveryman from '../models/Deliveryman';

class DeliveryProblemController {
  async index(req, res) {
    const { deliveryId } = req.params;
    const deliveries = await DeliveryProblem.findAll({
      where: {
        deliveryId,
      },
    });

    return res.json(deliveries);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!schema.validate(req.body)) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { description } = req.body;
    const { deliveryId } = req.params;
    const delivery = await Delivery.findByPk(deliveryId);
    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    const deliveryProblem = await DeliveryProblem.create({
      deliveryId,
      description,
    });

    return res.json(deliveryProblem);
  }

  async delete(req, res) {
    const { id } = req.params;
    const deliveryProblem = await DeliveryProblem.findByPk(id, {
      include: [
        {
          model: Delivery,
          as: 'delivery',
          attributes: ['product', 'startDate', 'endDate', 'canceledAt'],
          include: [
            {
              model: Deliveryman,
              as: 'deliveryman',
              attributes: ['name', 'email'],
            },
          ],
        },
      ],
    });

    if (!deliveryProblem) {
      return res.status(400).json({ error: 'Delivery problem not found' });
    }

    if (deliveryProblem.delivery.endDate) {
      return res.status(400).json({ error: 'Delivery already completed' });
    }

    if (deliveryProblem.delivery.canceledAt) {
      return res.status(400).json({ error: 'Cannot cancel delivery canceled' });
    }

    await Delivery.update(
      { canceledAt: new Date() },
      {
        where: {
          id: deliveryProblem.deliveryId,
        },
      }
    );

    Queue.add(DeliveryCancellationMail.key, { deliveryProblem });
    return res.status(204).send();
  }
}

export default new DeliveryProblemController();
