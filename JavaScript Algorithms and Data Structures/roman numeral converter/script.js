const inputBox = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');

function converter(intValue){
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
    return romanValue;
  }
  
  
  
  
  
  
  
  