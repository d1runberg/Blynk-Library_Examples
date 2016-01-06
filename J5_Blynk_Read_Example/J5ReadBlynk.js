//require the modules needed
var BlynkLib = require('blynk-library');
var five = require('johnny-five');
var galileo = require('galileo-io');

//create a new board object with the IO specified as Galileo
var board = new five.Board({
   io: new galileo()
});

//create the blynk object with app id
var blynk = new BlynkLib.Blynk('18ca5be499384708a0a1e04ad1803d9d');
//create the blynk pin object for pin 9
var v2 = new blynk.VirtualPin(2);

//board event for when its ready to do its thing
board.on("ready",function(){
   //create led object on pin 13
   var led = new five.LED(13);
   //create event that listens for write toggles the LED when written to
   v2.on('write', function(params) {
      led.toggle();
   });
});
