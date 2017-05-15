const fs = require('fs');

module.exports = function(options) {
  var seneca = this;
  const inventory = seneca.make('inventory');

  seneca.add({role:'inventory', cmd:'findAll'}, findAll);
  seneca.add({role:'inventory', cmd:'findById'}, findById);
  seneca.add({role:'inventory', cmd:'create'}, create);
  seneca.add({role:'inventory', cmd:'update'}, update);
  seneca.add({role:'inventory', cmd:'remove'}, remove);
 
  function findById(args, done) {
     return inventory.load$({id: args.id}, (err, result) => {
       if (err) return done(err);
       if (!result) return done(null, {msg: 'not found'});
       return done(null, {result: seneca.util.clean(result)});
    });
  }

  function update(args, done) {
    return inventory.load$({id: args.id}, (err, result) => {
       if (err) return done(err);
       if (!result) return done(null, {msg: 'not found'});

       inventory.name = args.name;
       return inventory.save$((err, result) => {
          if(err) return done(err);
          return done(null, {result: seneca.util.clean(result)});
        })  
    });
  }

  function findAll(args, done) {
     return inventory.list$({}, (err, result) => {
       if (err) return done(err);
       if (!result) return done(null, {msg: 'no record'});
       return done(null, {result: result});
    });
  }

  function create(args, done) {
    
    inventory.name = args.name;

    return inventory.save$((err, result) => {
      if(err) return done(err);
      return done(null, {result: seneca.util.clean(result)});
    })  
  }

  function remove(args, done) {
    const id = args.id;
    return inventory.load$({id: id}, (err, result) => {
       if (err) return done(err);
       if (!result) return done(null, {msg: 'not found'});

       return inventory.remove$({id: id}, (err, result) => {
          if(err) return done(err);
          return done(null, {result: true});
        })  
    });
  }
}
