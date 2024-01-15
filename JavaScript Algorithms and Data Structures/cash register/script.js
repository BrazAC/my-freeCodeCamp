const cashInput = document.getElementById('cash');
const changeDiv = document.getElementById('change-due');
const purchaseButton = document.getElementById('purchase-btn');
const priceDisplay = document.getElementById('show-price');

let price = 19.5;
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 70], ["TWENTY", 120], ["ONE HUNDRED", 500]];
priceDisplay.textContent = price;

function getDataAndRun(price, cash, cid){
  let priceConv = price;
  let cashCleaned = parseFloat(cash.replace(/[\s\Wa-zA-Z&&[^.]]/g, ""));
  let cashConv = parseFloat((cashCleaned).toFixed(2));
  let cidConv = cid;
  checkCashRegister(priceConv, cashConv, cidConv);
}

function checkCashRegister(price, cash, cid) {
  let change = {status: "", change:[]};
  let totalChange = parseFloat((cash - price).toFixed(2));
  let cidSum = 0;
  let changeAtribute = [];
  let divText = '';

  console.log(totalChange);

  const cidValue = cid.reverse();
  const coinValue = [[0.01, "PENNY"], [0.05, "NICKEL"], [0.1, "DIME"], [0.25, "QUARTER"], [1, "ONE"], [5, "FIVE"], [10, "TEN"], [20, "TWENTY"], [100, "ONE HUNDRED"]].reverse();

  for(let coinType of cidValue){
    cidSum = cidSum + coinType[1];
  }

  if(totalChange < 0){
    alert('Customer does not have enough money to purchase the item');
  }else if(totalChange === 0){
    changeDiv.textContent = 'No change due - customer paid with exact cash';
    return;
  }else if(cidSum < totalChange){
    changeDiv.textContent = "Status: INSUFFICIENT_FUNDS";
  }else{
    change.status = "OPEN";

    let counter = 0;
    
    for(let coinType of coinValue){
        
        if(coinType[0] <= totalChange){
          let coinAmmount = Math.floor((cidValue[counter][1])/coinType[0]);

          let coinNece = Math.floor(totalChange/coinType[0]);
          let usedCoins;

          if(coinAmmount <= coinNece || coinAmmount === 0){
            usedCoins = Math.floor(coinNece - (coinNece - coinAmmount));
            totalChange = parseFloat((totalChange - (usedCoins * coinType[0])).toFixed(2));
            cidValue[counter][1] -= (usedCoins * coinType[0]);

          }else{
            usedCoins = coinNece;
            totalChange = parseFloat((totalChange - (usedCoins * coinType[0])).toFixed(2));
            cidValue[counter][1] -= (usedCoins * coinType[0]);
          }
          changeAtribute.push([coinType[1], usedCoins*coinType[0]]);

        }else{
          console.log(`The coin ${coinType[1]}, value: ${coinType[0]} is to high to change: ${totalChange}`);
        }
        counter ++;
    }

    cidSum = 0;
    for(let coinType of cidValue){
      cidSum = cidSum + coinType[1];
    }
    if(cidSum <= 0){
      change.status = "CLOSED";
      const revChangeAtribute = changeAtribute.reverse();
      let counter1 = 0;
      for(let elem of changeAtribute){
        if(elem[1] !== cidValue[counter1][1]){ 
          cidValue[counter1][1] = elem[1];
        }
        counter1 ++;
      }

      change.change = [...revChangeAtribute]; //AQUI

      let i = change.change.length - 1;
      divText = `Status: ${change.status} `;
      while(i >= 0){
        divText += `${change.change[i][0]}: $${change.change[i][1]} `;
        i--;
      }
      console.log(divText);
      changeDiv.textContent = divText;
      return;

    }else{
      if(totalChange > 0){
        change.status = "INSUFFICIENT_FUNDS";
      }else{
        change.change = [...changeAtribute];
      }
    }
    
    let i = 0;
    divText = `Status: ${change.status} `;
    while(i <= change.change.length - 1){
      divText += `${change.change[i][0]}: $${change.change[i][1]} `;
      i++;
    }
    changeDiv.textContent = divText;
  }
  console.log(totalChange);
}
  
purchaseButton.addEventListener('click', function(){
  getDataAndRun(price, cashInput.value, cid);
})