//localhost:27017 is the server host
//exampleDB is the port -> change both once real database is created
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/telemetry.UTSTelemetry';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connection successful!");
//  const db = client.db('telemetry.UTSTelemetry');

 //  var cursor = db.collection("speedometer").find({}, function(err, result) {
 //    if(err) throw err;
 //    console.log(result.speed);
 //    db.close();
 //  });
 //  console.log(cursor);
 // document.getElementById("speed").style.background = "green";

  db.close();
});


// function main() {
//
//   String category;
//
//   switch (category) {
//     case "speedometer":
//       speedometer();
//       break;
//     case "acc-voltage":
//         acc_voltage();
//         break;
//     case "temperature":
//         temperature();
//         break;
//     case "steering position":
//         steering_pos();
//         break;
//     case "down-force":
//         down_force();
//         break;
//     default:
//         console.log("Didn't work");
//         break;
//   }
// }
// function speedometer() {
//
// }

// function acc_voltage() {
//   var cursor = db.collection('acc-voltage').find({});
// }
//
// function temperature() {
//   var cursor = db.collection('temperature').find({});
// }
//
//
// function steering_pos() {
//   var cursor = db.collection('steering-pos').find({});
// }
//
// function down_force() {
//   var cursor = db.collection('down-force').find({});
// }
