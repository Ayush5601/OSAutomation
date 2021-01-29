var robot = require("robotjs");             //importing the robotjs functionality

var fileSystem = require("fs");             //to fetch JSON created (in form of 2d matrix)

setTimeout(startOpenBoard, 2000);          //works only once (setInterval works on and on)

function startOpenBoard(){
    robot.moveMouseSmooth(59, 704);        //to search icon (got this by moseLocation function)
    robot.mouseClick();
    robot.typeString("openboard");
    robot.keyTap("enter");                  //clicks once

    setTimeout(writeHi, 2000);
}

function writeHi(){
    robot.moveMouseSmooth(400, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(400, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(400, 350);
    robot.mouseToggle("down", "left");      //keeps the key pressed
    robot.dragMouse(600, 350);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(600, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(600, 450);
    robot.mouseToggle("up", "left");            //H will be written

    robot.moveMouseSmooth(700, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(900, 250);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(800, 250);
    robot.mouseToggle("down", "left");
    robot.dragMouse(800, 450);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(700, 450);
    robot.mouseToggle("down", "left");
    robot.dragMouse(900, 450);
    robot.mouseToggle("up", "left");            //I will be written

    robot.moveMouseSmooth(1179, 19);
    robot.mouseClick();
    setTimeout(openTelegram, 2000);
}

function openTelegram(){
    robot.moveMouseSmooth(59, 704);        //to search icon (got this by mouseLocation function)
    setTimeout(function(){                 
        robot.mouseClick();                //creating function within a function
        robot.typeString("telegram");
        robot.keyTap("enter");
        setTimeout(openEdge, 2000);         //adding time out to wait for search to respond
    }, 2000);
}
 
function openEdge(){
    robot.moveMouseSmooth(59, 704);
    setTimeout(function(){                
        robot.mouseClick();
        robot.typeString("telegram");
        robot.keyTap("enter");
        setTimeout(openTabs, 2000);
    }, 2000);
}

function openTabs(){
    var rdata = fileSystem.readFileSync("./edge.json");
    var tabs = JSON.parse(rdata);

    for(var i=0; i<tabs.length; i++){           //traversing json file as 2D list
        for(var j=0; j<tabs[i].length; j++){
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");

            if(j < tabs[i].length-1){
                robot.keyToggle("control","down");
                robot.keyTap("t");
                robot.keyToggle("control", "up");
            }else if(i < tabs.length-1){
                robot.keyToggle("control","down");
                robot.keyTap("n");
                robot.keyToggle("control", "up");
            }
        }
    }
    setTimeout(openFileExplorer, 2000);
}

function openFileExplorer(){
    robot.moveMouseSmooth(59, 704);
    setTimeout(function(){                
        robot.mouseClick();
        robot.typeString("thispc");
        robot.keyTap("enter");
    }, 2000);
}