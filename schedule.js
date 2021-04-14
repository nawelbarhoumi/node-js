const cron = require('node-cron');

const task = cron.schedule(' */2 * * * *', () => {
    console.log('running a task every two minutes');
    //logique qu'on veut faire(Business logic)
  });
task.stop();
