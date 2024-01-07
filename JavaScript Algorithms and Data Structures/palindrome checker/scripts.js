//GET ELEMENTS
const input = document.getElementById('text-input');
const buttonCheck = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

//FUNCTIONS
function getInputData(){
    const inputData = {data: input.value};
     return inputData;
}

function stringClear(dirtyString){
    const clearedString = dirtyString.replace('a', "");
    return clearedString
}

function setResult(result){
    resultDiv.textContent = result.data;
}

function allInOne(inputElement){
    const inputData = {data: inputElement.value};
    const clearedString = inputData.data.replace('a', "");
    resultDiv.textContent = clearedString;
}

//MAIN PROGRAM
//Get data
buttonCheck.addEventListener('click',()=>{allInOne(input)});

//Clear Input String


//Check Palindrome

//Set Result
