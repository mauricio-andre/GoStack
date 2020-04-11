import Mail from '../../lib/Mail';

class DeliveryCancellationMail {
  get key() {
    return 'DeliveryCancellationMail';
  }

  async handle({ data }) {
    const { deliveryProblem } = data;
    await Mail.sendMail({
      to: `${deliveryProblem.delivery.deliveryman.name} <${deliveryProblem.delivery.deliveryman.email}>`,
      subject: 'Entrega cancelada',
      template: 'deliveryCancellation',
      context: {
        problem: deliveryProblem.description,
        deliveryman: deliveryProblem.delivery.deliveryman.name,
        product: deliveryProblem.delivery.product,
      },
    });
  }
}

export default new DeliveryCancellationMail();
