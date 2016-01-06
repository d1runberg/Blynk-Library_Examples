var BlynkLib = require('blynk-library');

var blynk = new BlynkLib.Blynk('18ca5be499384708a0a1e04ad1803d9d');
var v2 = new blynk.VirtualPin(2);

v2.on('write', function(params) {
  console.log("From Blynk App virtual pin 2: " + params);
});
