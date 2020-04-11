import Mail from '../../lib/Mail';

class DeliveryRegistrationMail {
  get key() {
    return 'DeliveryRegistrationMail';
  }

  async handle({ data }) {
    const { delivery } = data;

    await Mail.sendMail({
      to: `${delivery.deliveryman.name} <${delivery.deliveryman.email}>`,
      subject: 'Nova entrega disponível',
      template: 'deliveryRegistration',
      context: {
        deliveryman: delivery.deliveryman.name,
        recipient: delivery.recipient.name,
        product: delivery.product,
      },
    });
  }
}

export default new DeliveryRegistrationMail();
