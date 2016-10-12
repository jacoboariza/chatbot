var SparqlClient = require('sparql-client');
var util = require('util');
var endpoint = 'http://dbpedia.org/sparql';
 
// Get the leaderName(s) of the given citys 
// if you do not bind any city, it returns 10 random leaderNames 
var query = "SELECT * FROM <http://dbpedia.org> WHERE {?city <http://dbpedia.org/property/leaderName> ?leaderName} LIMIT 100";
var client = new SparqlClient(endpoint, {
  defaultParameters: {
    format: 'json'
  }
});

console.log("Query to " + endpoint);
console.log("Query: " + query);
client.query(query)
  .bind('city', '<http://dbpedia.org/resource/Madrid>') 
  //.bind('city', 'db:Tokyo') 
  //.bind('city', 'db:Casablanca') 
  //.bind('city', '<http://dbpedia.org/resource/Vienna>')
  .execute({format: {resource: 'leaderName'}},function(error, results) {
  //process.stdout.write(util.inspect(arguments[1], null, 10, true)+"\n");1
  //process.stdout.write(util.inspect(arguments, false, 10, true)+"\n");
  
  //var texto = util.inspect(arguments[1], false, 20, true);
  //texto = '{ "name": "John Doe", "age": 42 }';
  //var stringify = JSON.stringify(texto);
  
  //var salida = JSON.parse(arguments[1]);   
  //console.log(salida);
console.dir(arguments, {depth: null});

    //https://www.npmjs.com/package/sparql-client-2
    
    
  });


//var str = '{ "name": "John Doe", "age": 42 }';
//var obj = JSON.parse(str);

//console.log(obj.name);



