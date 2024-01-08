const input = document.getElementById('text-input');
const buttonCheck = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function allInOne(inputElement){
    const inputData = {data: inputElement.value};
    const clearedString = inputData.data.replace(/[^a-zA-Z\d:]/g, "");
    const superClearedString = clearedString.toLowerCase();
    const zeroBaseCharAmout = superClearedString.length;
    const repeatComparation = {value:""};

    const proveArray = [];

    if(zeroBaseCharAmout % 2 == 0){
        repeatComparation.value = zeroBaseCharAmout/2;
    }else{
        repeatComparation.value = Math.trunc(zeroBaseCharAmout/2);
    }

    for(let i = 0; i <= (repeatComparation.value - 1); i++){
        
        if(superClearedString[i] === superClearedString[(superClearedString.length - 1) - i]){
            proveArray.push('1'); 
        }else{
            proveArray.push('0');
        }
    }

    if(proveArray.indexOf('0') !== -1){
        console.log("NÃO É");
        resultDiv.textContent = `${inputData.data} is not a palindrome`;
    }else{
        console.log("É");
        resultDiv.textContent = `${inputData.data} is a palindrome`;
    } 
}

function verifyAndRun(){
    if(input.value === ""){
        alert('Please input a value');
    }else{
        allInOne(input);
    }
}

buttonCheck.addEventListener('click',()=>{verifyAndRun()});

buttonCheck.addEventListener('mousedown', ()=>{
    buttonCheck.style.backgroundColor = 'black';
    buttonCheck.style.color = 'white';
});
buttonCheck.addEventListener('mouseup', ()=>{
    buttonCheck.style.backgroundColor = 'white';
    buttonCheck.style.color = 'black';
});
buttonCheck.addEventListener('mouseout', ()=>{
    buttonCheck.style.backgroundColor = 'white';
    buttonCheck.style.color = 'black';
});
buttonCheck.addEventListener('mouseover', ()=>{
    buttonCheck.style.backgroundColor = 'rgb(206, 196, 240)';
    buttonCheck.style.color = 'black';
});