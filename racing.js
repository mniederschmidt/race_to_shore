/*******************************************************************************
    Your Object Definition
*******************************************************************************/

// TODO: define your object here


/*******************************************************************************
    Running Race Code
*******************************************************************************/

var racer;

function runRace()
{
    // TODO: fill code here
}

function resetRace()
{
    // TODO: fill code here
}

/*******************************************************************************
    jquery definitions
    these connect the javascript defined above to the html
*******************************************************************************/
$(document).on('ready', function(){

    // the inside function runs when the start race button is clicked
    $('#start-race').on('click', function (){
        runRace();
    });

    // the inside function runs when the reset race button is clicked
    $('#reset-race').on('click', function (){
        resetRace();
    });

});
