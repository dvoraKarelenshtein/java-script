let arrA = ["a", "b", "c", "d"]
window.onload = function () {
    console.log(arrA);

    let x = arrA.pop();
    console.log(arrA);
    console.log(x);


    arrA.push("A");
    console.log(arrA);

    let y = arrA.shift();
    console.log(arrA);
    console.log(y);

    arrA.shift("D");
    console.log(arrA);
    console.log(arrA);

}