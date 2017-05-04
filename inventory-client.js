const seneca = require('seneca')();

seneca.client();

seneca.act({role:'inventory', cmd:'create', name:'Fernando Cagale'}, (err, item) => {
  if(err) return console.error(err);
  console.log('Item add:', item);
});

seneca.act({role:'inventory', cmd:'findAll'}, (err, itens) => {
  if(err) return console.error(err);
  console.log('Itens all:', itens);
});