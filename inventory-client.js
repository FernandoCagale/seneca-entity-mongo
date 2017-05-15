const seneca = require('seneca')();

seneca.client();

seneca.act({role:'inventory', cmd:'create', name:'Fernando'}, (err, item) => {
  if(err) return console.error(err);
  console.log('Item add:', item);
});

seneca.act({role:'inventory', cmd:'findAll'}, (err, itens) => {
  if(err) return console.error(err);
  console.log('Itens all:', itens);
});

seneca.act({role:'inventory', cmd:'findById', id: '59188e724b8d3c0ab04c5510'}, (err, item) => {
  if(err) return console.error(err);
  console.log(item);
});

seneca.act({role:'inventory', cmd:'update', id:'59188e724b8d3c0ab04c5510', name: 'Fernando Cagale'}, (err, itens) => {
  if(err) return console.error(err);
  console.log('Item update:', itens);
});

seneca.act({role:'inventory', cmd:'remove', id:'59188ca24cafd129c8110853'}, (err, item) => {
  if(err) return console.error(err);
  console.log('Item deleta', item);
});
