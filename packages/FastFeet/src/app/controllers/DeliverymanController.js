import * as Yup from 'yup';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

class DeliverymanController {
  async index(req, res) {
    const deliverymen = await Deliveryman.findAll({
      attributes: ['id', 'name', 'email', 'avatarId'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(deliverymen);
  }

  async show(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id, {
      attributes: ['id', 'name', 'email', 'avatarId'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exist' });
    }

    return res.json(deliveryman);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      avatarId: Yup.number(),
    });

    if (!schema.validate(req.body)) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { email } = req.body;
    const deliveryman = await Deliveryman.findOne({ where: { email } });
    if (deliveryman) {
      return res.status(400).json({ error: 'Recipient already exists' });
    }

    const { id, name, avatarId } = await Deliveryman.create(req.body);
    return res.json({ id, name, email, avatarId });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      avatarId: Yup.number().nullable(),
    });

    if (!schema.validate(req.body)) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);
    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exist' });
    }

    const { name, email, avatarId } = await deliveryman.update(req.body);
    return res.json({ id, name, email, avatarId });
  }

  async delete(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);
    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exists' });
    }

    await deliveryman.destroy();
    return res.status(204).send();
  }
}

export default new DeliverymanController();
