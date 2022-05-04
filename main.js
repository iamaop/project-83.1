canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

var last_position_of_x=0;
var last_position_of_y=0;
 color="black";
 width=10;
document.getElementById("color").value=color;
document.getElementById("width").value=width;

var width_of_screen=screen.width;
new_width=screen.width-70;
new_height=screen.height-200;

if(width_of_screen<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}


canvas.addEventListener("touchstart",my_touch_start);

function my_touch_start(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    console.log('touchstart');
    console.log(color);
    console.log(width);
    last_position_of_x=e.touches[0].clientX - canvas.offsetLeft; 
    last_position_of_y= e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove); 
function my_touchmove(e) {
     current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft; current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    
        console.log("touchmove");
         ctx.beginPath(); 
        ctx.strokeStyle = color; 
        ctx.lineWidth = width;

        ctx.moveTo(last_position_of_x, last_position_of_y)
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + ", y = " + last_position_of_y);

        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);

        console.log("Current position of x and y coordinates = ");
         console.log("x = " + 
         current_position_of_touch_x + ", y = " + current_position_of_touch_y);
         ctx.stroke();

    
    last_position_of_x = current_position_of_touch_x;

    last_position_of_y = current_position_of_touch_y;

}

function clear_canvas(){
ctx.clearRect(0,0,canvas.width,canvas.height);

}