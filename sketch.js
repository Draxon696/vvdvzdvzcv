var ball;
var database, position;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(290,290,10,10);
    ball.shapeColor = "red";
    var ballPosition = database.ref('Ball/Position');
    ballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writehangePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('Ball/Position').set({
        'x':position.x + x, 
        'y':position. y + y
    })
    
}
function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;

}

function showError(){
console.log("error");
}