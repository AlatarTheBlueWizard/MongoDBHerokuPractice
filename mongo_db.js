var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb+srv://admin:admin@exdatabase-4y1xa.mongodb.net/test?retryWrites=true&w=majority';

MongoClient.connect(url, function(err, db) {
	if(err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		console.log('Connection established to', url);
		db.close();
	}
});