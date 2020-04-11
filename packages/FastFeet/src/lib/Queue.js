import Bee from 'bee-queue';
import redisConfig from '../config/redis';
import DeliveryRegistrationMail from '../app/jobs/DeliveryRegistrationMail';
import DeliveryCancellationMail from '../app/jobs/DeliveryCancellationMail';

const jobs = [DeliveryRegistrationMail, DeliveryCancellationMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  add(key, data) {
    return this.queues[key].bee.createJob(data).save();
  }

  processQueue() {
    jobs.forEach(({ key }) => {
      const { bee, handle } = this.queues[key];
      bee.on('failed', this.handleFailure).process(handle);
    });
  }

  handleFailure(job, err) {
    console.log(`Queue ${job.queue.name}: FAILED`, err);
  }
}

export default new Queue();
