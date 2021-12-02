const path = require('path');
//During the test the env variable is set to test
const env = process.env.NODE_ENV || 'development';

var config = {
       development: {
              rootPath: path.normalize(__dirname + '/..'),
              app: { name: ' CRMLite' },
              port: 80,
              dbURL: 'mongodb://localhost/crmLite ',//crmlite should be the name of the database upon creation
              secret: "thisistheencryptioncode"
              //Mongo db uri mongodb+srv://VanSchyndel
       },
       test: {
              rootPath: path.normalize(__dirname + '/..'),
              app: { name: ' CRMLite' },
              port: 80,
              dbURL: 'mongodb://localhost/test '
              /*mongodb+srv://VanSchyndel:<password>@cluster0.lkeht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority*/
       }
};
module.exports = config[env];

/*const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://VanSchyndel:<password>@cluster0.lkeht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/