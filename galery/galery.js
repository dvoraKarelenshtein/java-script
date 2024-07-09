let arr_pic;
let counter;

window.onload = function () {
    arr_pic = ["../imege/hoes.jpg", "../imege/picoc.jpg", "../imege/see.jpg", "../imege/fly.jpg"]
    counter = 0;
}


function next() {


    if (counter < 2)
     { counter ++; }
    else { counter =0; }
   big_pic.src = "arr_pic[counter]";
}

function back() {

    if (counter > 0) { counter--; }
    else { counter = arr_pic.length - 1 }
    big_pic.src = arr_pic[counter];
}