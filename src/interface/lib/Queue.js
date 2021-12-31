import Queue from 'bull';

import redisConfig from '../../config/redis.js';
// import RegistrationMail from '../jobs/RegistrationMail.js';

import * as jobs from '../job/index.js';

const queues = Object.values(jobs).map((job) => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
  options: job.options,
}));

export default {
  queues,
  add(name, data) {
    const queue = this.queues.find((findQueue) => findQueue.name === name);

    return queue.bull.add(data, queue.options);
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.bull.process(queue.handle);

      queue.bull.on('failed', (job, err) => {
        console.log('job failed', queue.key, job.data);
        console.log(err);
      });
    });
  },
};

// // criando um novo background job
// const mailQueue = new Queue(RegistrationMail.key, redisConfig);

// // capturando as falhas do background job

// export default mailQueue;
