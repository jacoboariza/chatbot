var SparqlClient = require('sparql-client');
var util = require('util');
var endpoint = 'http://dbpedia.org/sparql';

var query = "SELECT * FROM <http://dbpedia.org> WHERE {?city <http://dbpedia.org/property/leaderName> ?leaderName} LIMIT 10";
var client = new SparqlClient(endpoint);
console.log("Query to " + endpoint);
console.log("Query: " + query);
client.query(query)
  .bind('city', '<http://dbpedia.org/resource/Madrid>')
  .execute(function(error, results) {
  //process.stdout.write(arguments[1].results.bindings.length); 
  process.stdout.write(util.inspect(arguments[1].results.bindings[0].leaderName.value, null, 20, true)+"\n");1
});