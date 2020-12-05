import Sequelize, { Model } from 'sequelize';

class Delivery extends Model {
  static init(sequelize) {
    super.init(
      {
        product: Sequelize.STRING,
        startDate: Sequelize.DATE,
        endDate: Sequelize.DATE,
        canceledAt: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Recipient, {
      foreignKey: 'recipientId',
      as: 'recipient',
    });

    this.belongsTo(models.Deliveryman, {
      foreignKey: 'deliverymanId',
      as: 'deliveryman',
    });

    this.belongsTo(models.File, {
      foreignKey: 'signatureId',
      as: 'signature',
    });

    this.hasMany(models.DeliveryProblem, {
      sourceKey: 'id',
      foreignKey: 'deliveryId',
      as: 'deliveryProblem',
    });
  }
}

export default Delivery;
