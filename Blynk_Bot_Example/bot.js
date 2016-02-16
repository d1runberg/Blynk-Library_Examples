var BlynkLib = require('blynk-library');
var five = require('johnny-five');

// List the state of all currently attached devices
var board = new five.Board();

//create the blynk object with app id
var blynk = new BlynkLib.Blynk('dfbda0eb54e04ab5a0b52f8618bea560');
//create the blynk pin object for pin 9
var leftSpeed = new blynk.VirtualPin(2);
var rightSpeed = new blynk.VirtualPin(1);

//board event for when its ready to do its thing
board.on("ready",function(){
   //create led object on pin 13
   //create a motor object for the right motor with pins specified
      var rMotor = new five.Motor({
         pins:{
            pwm: 6 ,
            dir: 7,
            cdir: 8
         }
      });

   //create a motor object for the left motor with pins specified
      var lMotor = new five.Motor({
         pins:{
            pwm: 3,
            dir: 4,
            cdir: 5
         }
      });

      leftSpeed.on('write', function(params) {
         if(params < 0)
         {

            lMotor.reverse(Math.abs(params));
         }
         else if( params > 0) {

            lMotor.forward(params);
         }
         else{
            lMotor.stop();
         }
      });

      rightSpeed.on('write', function(params) {
         if(params < 0)
         {
            rMotor.reverse(Math.abs(params));
         }
         else if( params > 0) {

            rMotor.forward(params);
         }
         else{
            rMotor.stop();
         }
      });
   //create event that listens for write toggles the LED when written to
});
