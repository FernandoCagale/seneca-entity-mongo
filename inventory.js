const fs = require('fs');

module.exports = function(options) {
  var seneca = this;
  const inventory = seneca.make('inventory');

  seneca.add({role:'inventory', cmd:'findAll'}, findAll);
  seneca.add({role:'inventory', cmd:'findById'}, findById);
  seneca.add({role:'inventory', cmd:'create'}, create);
 
  function findById(args, done) {
     return inventory.load$({id: args.id}, (err, result) => {
       if (err) return done(err);
       if (!result) return done(null, {msg: 'not found'});
       return done(null, {result: seneca.util.clean(result)});
    });
  }

  function findAll(args, done) {
     return inventory.list$({}, (err, result) => {
       if (err) return done(err);
       if (!result) return done(null, {msg: 'no record'});
       return done(null, {result: seneca.util.clean(result)});
    });

    /*
    fs.readFile('./db.json', { encoding: 'utf8' }, (err, itens) => {
        const itensAll = JSON.parse(itens);
        done(null, itensAll);
    });
    */
    
  }

  function create(args, done) {
    
    inventory.name = args.name;

    return inventory.save$((err, result) => {
      if(err) return done(err);
      return done(null, {result: seneca.util.clean(result)});
    })

    /*
      fs.writeFile('./db.json', JSON.stringify(itemName, null), (err) => {
        if(err) return console.error(err);
        done(null, itemName);
      });
    */    
  }
}
