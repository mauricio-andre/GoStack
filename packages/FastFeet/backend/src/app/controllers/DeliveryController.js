import * as Yup from 'yup';
import { Op } from 'sequelize';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';
import DeliveryRegistrationMail from '../jobs/DeliveryRegistrationMail';
import Queue from '../../lib/Queue';

import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryController {
  async index(req, res) {
    const { problem, product } = req.query;

    const where = {};
    if (product) {
      where.product = {
        [Op.iLike]: `%${product}%`,
      };
    }

    const deliveries = await Delivery.findAll({
      where,
      attributes: [
        'id',
        'product',
        'startDate',
        'endDate',
        'canceledAt',
        'recipientId',
        'deliverymanId',
        'signatureId',
      ],
      include: [
        {
          model: File,
          as: 'signature',
          attributes: ['url'],
        },
        {
          attributes: ['id', 'description'],
          model: DeliveryProblem,
          as: 'deliveryProblem',
          right: problem === 'yes',
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'postalCode',
            'address',
            'number',
            'postalCode',
            'city',
            'region',
          ],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'avatarId'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
      ],
    });
    return res.json(deliveries);
  }

  async show(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id, {
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
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email', 'avatarId'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
        {
          model: DeliveryProblem,
          as: 'deliveryProblem',
          attributes: ['description'],
        },
      ],
    });

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery does not exist' });
    }

    return res.json(delivery);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string().required(),
      recipientId: Yup.number().required(),
      deliverymanId: Yup.number().required(),
    });

    if (!schema.validate(req.body)) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { recipientId, deliverymanId } = req.body;
    const recipient = await Recipient.findByPk(recipientId);
    if (!recipient) {
      return res.status(400).json({ error: 'Recipient not found' });
    }

    const deliveryman = await Deliveryman.findByPk(deliverymanId);
    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman not found' });
    }

    const { product } = await Delivery.create(req.body);
    const delivery = {
      product,
      recipientId,
      deliverymanId,
      recipient: {
        name: recipient.name,
      },
      deliveryman: {
        name: deliveryman.name,
        email: deliveryman.email,
      },
    };

    Queue.add(DeliveryRegistrationMail.key, { delivery });
    return res.json(delivery);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string(),
    });

    if (!schema.validate(req.body)) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery does not exist' });
    }

    await delivery.update(req.body);
    const { product, deliverymanId, recipientId } = delivery;

    return res.json({
      id,
      product,
      deliverymanId,
      recipientId,
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);
    if (!delivery) {
      return res.status(400).json({ error: 'Delivery does not exist' });
    }

    if (delivery.startDate) {
      return res.status(400).json({
        error: 'This delivery cannot be removed because it was dispatched',
      });
    }

    await delivery.destroy();
    return res.status(204).send();
  }
}

export default new DeliveryController();
