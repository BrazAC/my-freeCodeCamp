const userInput = '1(555)555-5305';

function onlyValidChars(userInput){
    return userInput.replace(/[0-9-()\s]/g, "") === "";
}

function validCharAmount(userInput){
    const cleanedInput = userInput.replace(/[^\d]/g, "");
    //console.log(`Right Size: ${cleanedInput.length}`)
    if(cleanedInput.length === 11){
        console.log(cleanedInput[0])
        return cleanedInput[0] === '1';
    }else if(cleanedInput.length === 10){
        return true;
    }else{
        return false;
    }
}

function validCharDisposal(userInput){
    const regex = /1?\s?(\d{3})|(\(\d{3}\))\s?-?\d{3}\s?-?\d{4}/;
    return regex.test(userInput);
} 

console.log(validCharDisposal(userInput));



