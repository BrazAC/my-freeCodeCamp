function checkCashRegister(price, cash, cid) {
    let change = {status: "", change:[]};
    let totalChange = parseFloat((cash - price).toFixed(2));
    let cidSum = 0;
    let changeAtribute = [];

    const cidValue = cid.reverse();
    const coinValue = [[0.01, "PENNY"], [0.05, "NICKEL"], [0.1, "DIME"], [0.25, "QUARTER"], [1, "ONE"], [5, "FIVE"], [10, "TEN"], [20, "TWENTY"], [100, "ONE HUNDRED"]].reverse();

    for(let coinType of cidValue){
        cidSum = cidSum + coinType[1];
    }
    console.log("TOTAL CID DISPOSAL: " + cidSum);
    console.log("TOTAL CHANGE: " + totalChange);

    if(cidSum < totalChange){
        change.status = "INSUFFICIENT_FUNDS";
    }else{
        if(totalChange < 0){
            change.status = "INSUFFICIENT_FUNDS";
        }else if(totalChange === 0){
            change.status = "CLOSED";
        }else{
            change.status = "OPEN";
    
            let counter = 0;
            
            for(let coinType of coinValue){
               
                if(coinType[0] <= totalChange){
                    console.log("------------------------------------------");
                    console.log("Counter " + counter);
    
                    
                    let coinAmmount = Math.floor((cidValue[counter][1])/coinType[0]);
                    console.log("TOTAL DISPONÍVEIS: " + cidValue[counter][1])
                    console.log("VALOR DA MODEA: " + coinType[0])
                    
    
                    let coinNece = Math.floor(totalChange/coinType[0]);
                    let usedCoins;
    
                    console.log("CHANGE BEFORE IF: "+totalChange);
                    if(coinAmmount <= coinNece || coinAmmount === 0){
                        usedCoins = Math.floor(coinNece - (coinNece - coinAmmount));
                        totalChange = parseFloat((totalChange - (usedCoins * coinType[0])).toFixed(2));
                        cidValue[counter][1] -= (usedCoins * coinType[0]);
    
                        console.log(`Atual Change: ${totalChange}`);
                        
                    }else{
                        usedCoins = coinNece;
                        totalChange = parseFloat((totalChange - (usedCoins * coinType[0])).toFixed(2));
                        cidValue[counter][1] -= (usedCoins * coinType[0]);
                        console.log(`Atual Change: ${totalChange}`);
    
    
                    }
                    changeAtribute.push([coinType[1], usedCoins*coinType[0]]);
                    
    
                    console.log(`Coin Name: ${coinType[1]}, Value: ${coinType[0]}, Atual Change: ${totalChange}`);
                    console.log(`Neces Coins: ${coinNece}, Disposal Coins: ${coinAmmount}, Used Coins: ${usedCoins}`);
                    console.log("------------------------------------------");
                    
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
                const revCidValue = cidValue.reverse();
                const revChangeAtribute = changeAtribute.reverse();


                console.log(changeAtribute);
                console.log(cidValue);
                let counter1 = 0;
                for(let elem of changeAtribute){
                    if(elem[1] !== cidValue[counter1][1]){
                        
                        cidValue[counter1][1] = elem[1];
                        console.log(elem);
                    }
                    
                    counter1 ++;
                }
                

                change.status = "CLOSED";
                change.change = [...cidValue];
            }else{
                if(totalChange > 0){
                    change.status = "INSUFFICIENT_FUNDS";
                }else{
                    change.change = [...changeAtribute];
                }
            }            
        }
    }

    console.log(change);
    return change;
  }
  let arrayDeArray = [['nome0', 1], ['nome1', 2], ['nome2', 3], ['nome3', 4]];
  let revArrayDeArray = arrayDeArray.reverse();
  console.log(revArrayDeArray);
  //checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);