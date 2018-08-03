const Agenda = require('agenda');

const mongoString = process.env.MONGO_STRING || 'mongodb://127.0.0.1/agenda'
const agenda = new Agenda({ db: { address: mongoString, collection: 'agendaJobs' } });

// agenda.processEvery('10 seconds') // for testing
agenda.processEvery('3 minutes')
agenda.maxConcurrency(5);
agenda.lockLimit(5);
agenda.defaultLockLimit(5);

require('./jobs/sending')(agenda);

agenda.start(); // Returns a promise, which should be handled appropriately

module.exports = agenda;
