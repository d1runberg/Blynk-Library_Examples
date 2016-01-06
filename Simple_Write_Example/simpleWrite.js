var BlynkLib = require('blynk-library');

var blynk = new BlynkLib.Blynk('18ca5be499384708a0a1e04ad1803d9d');
var v9 = new blynk.VirtualPin(9);

v9.on('read', function() {
  v9.write(new Date().getSeconds());
});
