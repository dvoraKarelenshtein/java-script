let counter = 0;
let next_btn;
let back_btn;
window.onload = function () {
    saveChanges();
    declarBodyEvent()

}


function saveChanges() {
    document.querySelector("#h1_id").innerHTML = counter;
}

function declarBodyEvent() {
    next_btn = document.querySelector("#b1");
    back_btn = document.querySelector("#b2");
    next_btn.addEventListener("click", function () {
        counter++;
        saveChanges()
    })
    back_btn.addEventListener("click", function () {
        counter--;
        saveChanges()
    })
}