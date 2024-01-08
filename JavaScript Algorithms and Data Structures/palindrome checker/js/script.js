const input = document.getElementById('text-input');
const buttonCheck = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function allInOne(inputElement){
    const inputData = inputElement.value;
    const clearedString = inputData.replace(/[^a-zA-Z\d:]/g, "").toLowerCase();
    let zeroBaseCharAmount = clearedString.length;
    let counter = 0;

    if(zeroBaseCharAmount % 2 == 0){
        zeroBaseCharAmount = zeroBaseCharAmount/2;
    }else{
        zeroBaseCharAmount = Math.trunc(zeroBaseCharAmount/2);
    }

    for(let j = 0; j <= (zeroBaseCharAmount - 1); j++){
        if(clearedString[j] !== clearedString[(clearedString.length - 1) - j]){
            resultDiv.textContent = `${inputData} is not a palindrome`;
            break;
        }else{
            counter ++;
        }
    }
    if(counter == zeroBaseCharAmount){resultDiv.textContent = `${inputData} is a palindrome`};
}

function verifyAndRun(){
    if(input.value === ""){
        alert('Please input a value');
    }else{
        allInOne(input);
    }
}

buttonCheck.addEventListener('click', verifyAndRun);
