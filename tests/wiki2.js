sparql = require 'sparql';
client = new sparql.Client 'http://dbpedia.org/sparql';
client.query 'select * where { ?s ?p ?o } limit 100', (err, res) ->
  console.log res;