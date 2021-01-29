var robot = require("robotjs");

var id = setInterval(showMouseLocation, 1000);
function showMouseLocation(){
    var mouse = robot.getMousePos();
    console.log(mouse);

    if(mouse.x == 0 && mouse.y == 0){
        clearInterval(id);
    }
}
//script written to get the coordinates of the mouse pointer