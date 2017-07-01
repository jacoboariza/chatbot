var dps = require('dbpedia-sparql-client').default;

var util = require('util');
var endpoint = 'http://dbpedia.org/sparql';


var query = "SELECT * FROM <http://dbpedia.org> WHERE {<http://dbpedia.org/resource/Madrid> <http://dbpedia.org/property/leaderName> ?leaderName} LIMIT 10";

dps
  .client()
  .query(query)
  .asJson()
  .then(r => console.log(JSON.stringify(r)))
  .catch(e => console.error(e))

