import { startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import Delivery from '../models/Delivery';

class DeliveryTransportController {
  async store(req, res) {
    const { id } = req.body;
    const deliverymanId = req.headers.authorization;
    const delivery = await Delivery.findOne({
      where: {
        id,
        deliverymanId,
      },
    });

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    if (delivery.startDate) {
      return res.status(400).json({ error: 'Delivery already dispatched' });
    }

    if (delivery.endDate) {
      return res.status(400).json({ error: 'Delivery already completed' });
    }

    if (delivery.canceledAt) {
      return res.status(400).json({ error: 'Cannot start delivery canceled' });
    }

    const currentDate = new Date();
    const startDate = startOfDay(currentDate);
    const endDate = endOfDay(currentDate);
    const countStartedToday = await Delivery.count({
      where: {
        startDate: {
          [Op.between]: [startDate, endDate],
        },
      },
    });

    if (countStartedToday > 5) {
      return res.status(400).json({
        error:
          'It is not possible to start more than five deliveries in the same day',
      });
    }

    delivery.update({ startDate: currentDate });
    return res.json(delivery);
  }

  async update(req, res) {
    const { id } = req.body;
    const deliverymanId = req.headers.authorization;
    const delivery = await Delivery.findOne({
      where: {
        id,
        deliverymanId,
      },
    });

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    if (!delivery.startDate) {
      return res.status(400).json({ error: 'Delivery not dispatched yet' });
    }

    if (delivery.endDate) {
      return res.status(400).json({ error: 'Delivery already completed' });
    }

    if (delivery.canceledAt) {
      return res.status(400).json({ error: 'Cannot end delivery canceled' });
    }

    delivery.update({ endDate: new Date() });
    return res.json();
  }
}

export default new DeliveryTransportController();
