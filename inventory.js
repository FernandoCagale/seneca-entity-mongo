const fs = require('fs');

module.exports = function(options) {
  var seneca = this;

  seneca.add({role:'inventory', cmd:'findAll'}, findAll);
  seneca.add({role:'inventory', cmd:'create'}, create);
 
  function findAll(args, done) {
    fs.readFile('./db.json', { encoding: 'utf8' }, (err, itens) => {
        const itensAll = JSON.parse(itens);
        done(null, itensAll);
    });
    
  }

  function create(args, done) {
    const itemName = {
        name: args.name
    };
    
    fs.writeFile('./db.json', JSON.stringify(itemName, null), (err) => {
        if(err) return console.error(err);
        done(null, itemName);
    });
  }
}
