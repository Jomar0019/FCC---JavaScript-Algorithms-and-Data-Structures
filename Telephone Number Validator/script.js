const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const regex1 = /^\d{1} \d{3}-\d{3}-\d{4}$/; //1 555-555-5555
const regex2 = /^1\(\d{3}\)\d{3}-\d{4}$/; //1(555)555-5555
const regex3 = /^\d{10}$/; //5555555555
const regex4 = /^\d{3}-\d{3}-\d{4}$/; //555-555-5555
const regex5 = /^\(\d{3}\)\d{3}-\d{4}$/; //(555)555-5555
const regex6 = /^\d{1} \d{3} \d{3} \d{4}$/; //1 555 555 5555
const regex7 = /^1 \(\d{3}\) \d{3}-\d{4}$/; //1 (555) 555-5555

const validList = [regex1, regex2, regex3, regex4, regex5, regex6, regex7];

const isValid = nums => validList.some(regex => regex.test(nums));


checkBtn.addEventListener('click', (numRegex) => {
    if(userInput.value === '') {
        alert("Please provide a phone number");
        return;
    }

    result.textContent = isValid(userInput.value) ? `Valid US number: ${userInput.value}` : `Invalid US number: ${userInput.value}`
});

clearBtn.addEventListener('click', () => {
    result.textContent = '';
});