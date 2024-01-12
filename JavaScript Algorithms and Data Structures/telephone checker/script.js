const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div');

function onlyValidChars(userInput){
    if(userInput.value.replace(/[0-9-()\s]/g, "") !== ""){
        alert("Use only numbers, '-' and '()'")
        return false;
    }else if(userInput.value === ""){
        alert('Please provide a phone number');
        return false;
    }
    return true;
}

function checkTelefone(){
    const regex = /^1?\s?(\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/;
    const validChars = onlyValidChars(userInput);
    const result = regex.test(userInput.value);
    console.log(result);
    console.log(validChars);
    if(validChars === true && result==true){
        resultDiv.textContent = `Valid US number: ${userInput.value}`;
    }
    else{
        resultDiv.textContent = `Invalid US number: ${userInput.value}`;
    }
}

checkBtn.addEventListener('click', checkTelefone)
clearBtn.addEventListener('click', ()=>resultDiv.textContent="")