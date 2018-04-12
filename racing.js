/*******************************************************************************
    Your Object Definition
*******************************************************************************/

var submarine = {

  distanceFromShore: 100,
  hasEngine: true,
  color: "yellow",
  speed: "fast",
  engineOn: true,

  moveCloserToShore: function() {
    console.log("distance from shore: " + this.distanceFromShore);
    switch(this.speed) {
      case "fast":
        this.distanceFromShore -= 10;
        break;
      case "slow":
        this.distanceFromShore -= 1;
        break;
      default:
        this.distanceFromShore -= 5;
        break;
    };
  },
  turnEngineOn: function() {
    this.engineOn = true;
  },
  turnEngineOff: function() {
    this.engineOn = false;
  },
  resetRace: function(distance) {
    this.distanceFromShore = distance;
  },
};


/*******************************************************************************
    Running Race Code
*******************************************************************************/

var racer = submarine;
racer.color = "yellow";
racer.speed = "fast";

function runRace() {

  while (racer.distanceFromShore >= 0) {
    racer.moveCloserToShore(racer.speed);
  }
  console.log("FINISHED RACE");
}

function resetRace() {
  racer.resetRace(100);
}

/*******************************************************************************
    jquery definitions
    these connect the javascript defined above to the html
*******************************************************************************/
$(document).ready(function(){

    // the inside function runs when the start race button is clicked
    $('#start-race').on('click', function (){
        runRace();
    });

    // the inside function runs when the reset race button is clicked
    $('#reset-race').on('click', function (){
        resetRace();
    });

});
