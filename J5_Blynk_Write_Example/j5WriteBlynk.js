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
var v9 = new blynk.VirtualPin(9);

//create global variable for storing sensor value
var sensorValue= 0;

//board event for when its ready to do its thing
board.on("ready",function(){
   //create sensor objects
   var sensor = new five.Sensor("A0");
   //create sensor event that listens for data and stores it in the global variable
   sensor.on("data",function(){
      sensorValue = data;
   });
});
//blynk event lister for pin 9 that fires when app reads the virtual pin and writes the sensor value
v9.on('read', function() {
  v9.write(sensorValue);
});
