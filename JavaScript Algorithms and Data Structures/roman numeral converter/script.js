const inputBox = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');

function converter(){
    let intValue = parseInt(inputBox.value);

    if(isNaN(intValue)){
        outputDiv.textContent = "Please enter a valid number";
    }else if (intValue <= 0){
        outputDiv.textContent = "Please enter a number greater than or equal to 1";
    }else if(intValue >= 4000){
        outputDiv.textContent = "Please enter a number less than or equal to 3999";
    }
    else{
        let romanValue = "";
        const simbolAndValue = {
        M:	1000,
        CM:	900,
        D:	500,
        CD:	400,
        C:	100,
        XC:	90,
        L:	50,
        XL:	40,
        X:	10,
        IX:	9,
        V:	5,
        IV:	4,
        I:	1
        };
        for(let i in simbolAndValue){
        while(intValue >= simbolAndValue[i]){
            romanValue += i;
            intValue -= simbolAndValue[i];
        }
        }
        outputDiv.textContent= romanValue;
        }
}
function makeFade(){
    outputDiv.classList.add("makeFade");
    converter();
    setTimeout(()=>outputDiv.classList.remove("makeFade"),1500);
}
convertButton.addEventListener('click', makeFade);
  
  
  
  
  
  