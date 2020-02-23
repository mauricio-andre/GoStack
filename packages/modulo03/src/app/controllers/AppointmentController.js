import * as Yup from 'yup';
import Appointment from '../models/Appointment';
import User from '../models/User';

class AppointmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      providerId: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { providerId, date } = req.body;

    /**
     * Check if providerId is a provider
     */
    const isProvider = await User.findOne({
      where: {
        id: providerId,
        provider: true,
      },
    });

    if (!isProvider) {
      return res
        .status(401)
        .json({ error: 'You can only create appointments with providers' });
    }

    const appointment = await Appointment.create({
      userId: req.userId,
      providerId,
      date,
    });

    return res.json(appointment);
  }
}

export default new AppointmentController();
