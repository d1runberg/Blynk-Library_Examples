
//require the blynk-library module (be sure to npm install blynk-library before running)
var BlynkLib = require('blynk-library');

//create a new blynk object with app key (Replace key with yours)
var blynk = new BlynkLib.Blynk('18ca5be499384708a0a1e04ad1803d9d');

//create new pinobject for virtual pin 2
var v2 = new blynk.VirtualPin(2);

//create an event to fire when blynk app writes a value and print it to console
v2.on('write', function(params) {
  console.log("From Blynk App virtual pin 2: " + params);
});
