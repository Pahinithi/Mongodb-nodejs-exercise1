db.details.insert()


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
var myobj = {SongName:"Verithanam",Film:"Bigil",MusicDirector:"A.R.Rahuman",Singer:"Thalapathy Vijay"};
  dbo.collection("songdetails​").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
;
})exer
