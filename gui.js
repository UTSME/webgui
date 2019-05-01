

//localhost:27017 is the server host
//exampleDB is the port -> change both once real database is created
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/exampleDB", function(err, db) {
  if(!err) {
    console.log("Connection successful!");
  }
});

void main() {

  String category;

  switch (category) {
    case "speedometer":
      speedometer();
      break;
    case "acc-voltage":
        acc_voltage();
        break;
    case "temperature":
        temperature();
        break;
    case "steering position":
        steering_pos();
        break;
    case "down-force":
        down_force();
        break;
    default:
        console.log("Didn't work");
        break;
  }
}
speedometer() {
  var cursor = db.collection('speedometer').find({});
   document.getElementById("speed").style.background = "green";
}

acc_voltage() {
  var cursor = db.collection('acc-voltage').find({});
}

temperature() {
  var cursor = db.collection('temperature').find({});
}


steering_pos() {
  var cursor = db.collection('steering-pos').find({});
}

down_force() {
  var cursor = db.collection('down-force').find({});
}

 
