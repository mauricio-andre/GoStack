import { Op } from 'sequelize';
import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { name } = req.query;
    const where = {};

    if (name) {
      where.name = {
        [Op.iLike]: name,
      };
    }

    const recipients = await Recipient.findAll({ where });
    return res.json(recipients);
  }

  async show(req, res) {
    const { id } = req.params;
    const recipient = await Recipient.findByPk(id);
    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exist' });
    }

    return res.json(recipient);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      address: Yup.string().required(),
      number: Yup.number(),
      complement: Yup.string(),
      region: Yup.string().required(),
      city: Yup.string().required(),
      postalCode: Yup.string().required(),
    });

    if (!schema.validate(req.body)) {
      return res.status(400).json({ error: 'Validations fails' });
    }

    const { name, region, city, postalCode } = req.body;
    const recipient = await Recipient.findOne({
      where: { name, region, city, postalCode },
    });

    if (recipient) {
      return res.status(400).json({ error: 'Recipient already exists' });
    }

    const { id, address, number, complement } = await Recipient.create(
      req.body
    );

    return res.json({
      id,
      name,
      address,
      number,
      complement,
      region,
      city,
      postalCode,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      address: Yup.string(),
      number: Yup.number(),
      complement: Yup.string(),
      region: Yup.string(),
      city: Yup.string(),
      postalCode: Yup.string(),
    });

    if (!schema.validate(req.body)) {
      return res.status(400).json({ error: 'validations fails' });
    }

    const { id } = req.params;
    const recipient = await Recipient.findByPk(id);
    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exist' });
    }

    const {
      name,
      address,
      number,
      complement,
      region,
      city,
      postalCode,
    } = await recipient.update(req.body);

    return res.json({
      id,
      name,
      address,
      number,
      complement,
      region,
      city,
      postalCode,
    });
  }

  async delete(req, res) {
    const { id } = req.params;
    const recipient = await Recipient.findByPk(id);
    if (!recipient) {
      return res.staus(400).json({ error: 'Recipient does not exist' });
    }

    recipient.destroy({ where: { id } });
    return res.json({ success: 'Recipient destroyed' });
  }
}

export default new RecipientController();
