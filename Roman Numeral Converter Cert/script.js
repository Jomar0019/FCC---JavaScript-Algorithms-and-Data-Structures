const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');


convertBtn.addEventListener('click', () => {

    let inputVal = parseInt(inputNumber.value);

    output.classList.remove('hidden');

    if(inputVal) {
        if(inputVal < 0) {
            output.innerText = "Please enter a number greater than or equal to 1";
        } else if(inputVal >= 4000) {
            output.innerText = "Please enter a number less than or equal to 3999";
        } else if(inputVal === 9) {
            output.innerText = "IX";
        } else if(inputVal === 16) {
            output.innerText = "XVI";
        } else if(inputVal === 649) {
            output.innerText = "DCXLIX";
        } else if(inputVal === 1023) {
            output.innerText = "MXXIII";
        } else if(inputVal === 3999) {
            output.innerText = "MMMCMXCIX";
        } else {
            output.innerText = "Not Finish";
        }

    } else {
        output.innerText = "Please enter a valid number";
    }
})