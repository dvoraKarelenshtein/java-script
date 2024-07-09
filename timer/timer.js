counter = 0;
timer = 0;

window.onload = function () {
    document.querySelector("#id_h2").innerHTML = counter;
    declarViewEvent();
}
function declarViewEvent(){
    let play_btn=document.querySelector("#b1");
    let stop_btn=document.querySelector("#b2");
play_btn.addEventListener("click",play);
stop_btn.addEventListener("click",stop);
}

function play(){
    clearInterval(timer);
    timer=setInterval(function(){
        counter++;
        document.querySelector("#id_h2").innerHTML=counter;
        if(counter>=5){
            clearInterval(timer);

        }
    },1000)
}

function stop(){
    clearInterval(timer)
}