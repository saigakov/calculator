window.onload = function() {
 let calcNumber = document.querySelectorAll(".number"),
    inputCalc = document.querySelector(".input");

    calcNumber.forEach(function(button) {
        button.addEventListener('click', onButtonClick);
    });
    

    function onButtonClick(e) {
        if (e.target.innerHTML === "C") {
            inputCalc.innerHTML = '0';
        } else if (e.target.innerHTML === "=") {
            inputCalc.innerHTML = eval(inputCalc.innerHTML);
        } else if (inputCalc.innerHTML === "0") {
            inputCalc.innerHTML = e.target.innerHTML;
        } else {
            inputCalc.innerHTML += e.target.innerHTML;
        }
    };








 //console.log(inputCalc);
 };
 