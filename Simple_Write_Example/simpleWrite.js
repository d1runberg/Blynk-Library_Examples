//require the blynk library
var BlynkLib = require('blynk-library');

//create a new blynk object and pass it your app key
var blynk = new BlynkLib.Blynk('18ca5be499384708a0a1e04ad1803d9d');

//create a virtual pin object and connect it to virtual pin 9
var v9 = new blynk.VirtualPin(9);

//create a virtualpin event that writes the date seoncds from your computer when it recieves "read"
v9.on('read', function() {
  v9.write(new Date().getSeconds());
});
