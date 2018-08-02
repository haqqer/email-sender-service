module.exports = function (agenda) {
  agenda.define('fls registration', (job, done) => {
    let data = job.attrs.data
    console.log('mulai register', data.email);
    setTimeout( () => {
      console.log('Thanks for registering', data.email);
      done()
    }, 10000);
  });

  // agenda.define('reset password', (job, done) => {
  //   // Etc
  // });

  // More email related jobs
};
