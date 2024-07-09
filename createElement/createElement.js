window.onload = function () {
    creatBotton("usa","40m");
    creatBotton("israel","9.5m");
}
function creatBotton(_txt, _pop) {
    let id_row = document.querySelector("#id_row");
    let myBtn = document.createElement("button");
    myBtn.innerHTML = _txt;
    myBtn.className = "btn btn-info me-2"
    id_row.appendChild(myBtn);

    myBtn.addEventListener("click",function(){
        alert("pop:"+_pop)
    })

}