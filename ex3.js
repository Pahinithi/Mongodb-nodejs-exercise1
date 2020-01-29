db.details.insert()


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("music");
  var myobj = {SongName:"Thaniye Thananthaniye",Film:"Rhythm",MusicDirector:"A.R.Rahman",Singer:"Shankar Mahadevan"};
  var myobj = {SongName:"Evano Oruvan",Film:"Alai Payuthey",MusicDirector:"A.R.Rahman",Singer:"Swarnalatha"};
  var myobj = {SongName:"Roja Poonthottam",Film:"Kannukkul Nilavu",MusicDirector:"Ilaiyaraaja",Singer:"Unnikrishnan,
AnuradhaSriram"};
  var myobj = {SongName:"Vennilavae Vennilavae Vinnaithaandi",Film:"Minsara Kanavu",MusicDirector:"A.R.Rahman",
  Singer:"Hariharan,Sadhana Sargam"};
var myobj = {SongName:"Sollamal Thottu Chellum Thendral",Film:"Dheena",MusicDirector:"Yuvan Shankar Raja",Singer:"Hariharan"};
  dbo.collection("songdetails​").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
