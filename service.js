const seneca = require('seneca')();
const entity = require('seneca-entity');
const mongoStore = require('seneca-mongo-store');

const opts = {
  mongo: {
    uri: 'mongodb://127.0.0.1:27017/seneca-entity-mongo',
    options: {}
  }
};

seneca.use(entity);
seneca.use(mongoStore, opts.mongo);
seneca.use('./inventory.js');

seneca.listen();
