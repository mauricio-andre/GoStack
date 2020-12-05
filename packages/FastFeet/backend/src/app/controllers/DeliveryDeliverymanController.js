import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

class DeliveryDeliverymanController {
  async index(req, res) {
    const deliverymanId = req.headers.authorization;
    const deliveryman = await Deliveryman.findByPk(deliverymanId);
    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }

    const where = {};
    const { status = 'undeliverable' } = req.query;
    switch (status) {
      case 'all':
        break;
      case 'delivered':
        where.endDate = {
          [Op.not]: null,
        };
        break;
      case 'canceled':
        where.canceledAt = {
          [Op.not]: null,
        };
        break;
      default:
        // undeliverable
        where.endDate = null;
        where.canceledAt = null;
    }

    const deliveries = await Delivery.findAll({
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'name',
            'address',
            'number',
            'complement',
            'region',
            'city',
            'postalCode',
          ],
        },
      ],
      where: {
        ...where,
        deliverymanId,
      },
    });

    return res.json(deliveries);
  }

  async show(req, res) {
    const { id } = req.params;
    const deliverymanId = req.headers.authorization;
    const delivery = await Delivery.findOne({
      where: {
        id,
        deliverymanId,
      },
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'name',
            'address',
            'number',
            'complement',
            'region',
            'city',
            'postalCode',
          ],
        },
      ],
    });

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    return res.json(delivery);
  }
}

export default new DeliveryDeliverymanController();
