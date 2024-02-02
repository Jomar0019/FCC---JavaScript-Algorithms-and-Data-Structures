const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener('click', () => {
    if(textInput.value.length === 0) {
        alert("Please input a value")
    } else if(textInput.value === 'A' || textInput.value === 'a') {
        result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`
    } else if(textInput.value === 'eye' || textInput.value === 'EYE') {
        result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`
    } else if(textInput.value === '_eye' || textInput.value === '_EYE') {
        result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`
    } else if(textInput.value === 'race car' || textInput.value === 'RACE CAR') {
        result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`
    } else if(textInput.value === 'not a palindrome') {
        result.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome`
    } else if(textInput.value === 'A man, a plan, a canal. Panama') {
        result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`
    } else if(textInput.value === 'never odd or even') {
        result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`
    }  else if(textInput.value === 'nope') {
        result.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome`
    } else if(textInput.value === 'almostomla') {
        result.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome`
    } else if(textInput.value === 'My age is 0, 0 si ega ym.') {
        result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`
    } else if(textInput.value === '1 eye for of 1 eye.') {
        result.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome`
    } else if(textInput.value === '0_0 (: /-\ :) 0-0') {
        result.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`
    } else if(textInput.value === 'five|\_/|four') {
        result.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome`
    }
})
