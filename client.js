const seneca = require('seneca')();

seneca.client();

const ID = '59188e724b8d3c0ab04c5510';

seneca.act({ role: 'inventory', cmd: 'create', name: 'Fernando' }, (err, item) => {
  if (err) return console.error(err);
  console.log('Item add:', item);
});

seneca.act({ role: 'inventory', cmd: 'findAll' }, (err, itens) => {
  if (err) return console.error(err);
  console.log('Itens all:', itens);
});

seneca.act({ role: 'inventory', cmd: 'findById', id: ID }, (err, item) => {
  if (err) return console.error(err);
  console.log(item);
});

seneca.act({ role: 'inventory', cmd: 'update', id: ID, name: 'Fernando Cagale' }, (err, itens) => {
  if (err) return console.error(err);
  console.log('Item update:', itens);
});

seneca.act({ role: 'inventory', cmd: 'remove', id: ID }, (err, item) => {
  if (err) return console.error(err);
  console.log('Item delete', item);
});
