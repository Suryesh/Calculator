let buttons = document.querySelector('.butttons');
let btn = document.querySelector('span');
let value = document.getElementById('value');

for (let i = 0; i < btn.clientHeight; i++) {
    btn[i].addEventListener("click", function () {

        if (this.innerHTML == "=") {
            value.innerHTML = eval(value.innerHTML);
        } else {
            if (this.innerHTML == "clear") {
                value.innerHTML = "";
            } else {
                value.innerHTML += this.innerHTML;
            }
        }
    })
}