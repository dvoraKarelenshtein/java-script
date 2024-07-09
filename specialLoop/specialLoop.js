window.onload = function () {
    let arrLoop = ["a", "b", "c", "d"]
    //דרך א
    for (let i = 0; i < arrLoop.length; i++) {
        document.body.innerHTML += `<h2>${arrLoop[i]}</h2>`
    }
    //דרך ב
    for (let i = 0; i < arrLoop.length; i++) {
        let item = arrLoop[i];
        document.body.innerHTML += `<h2>${item}---</h2>`
    }
    //דרך ג
    for (let i in arrLoop) {
        let item = arrLoop[i];

        document.body.innerHTML += `<h2>${item}+++</h2>`
    }
    //דרך ד
    for (let item of arrLoop) {
        document.body.innerHTML += `<h2>${item}===</h2>`
    }

    arrLoop.forEach(function (item, i) {
        document.body.innerHTML += `<h2>${item}+++${i}</h2>`

    })

    let car = {
        mame: "mazda",
        price: "200000",
        color: "broun"
    }

    for (let key in car) {
        console.log(key);
        console.log(car[key]);

    }

}
