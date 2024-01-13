let price = 3.26;
let cash = 100;
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];
const cidReverse = cid.reverse();

let troco = cash - price;

/*
for(let due of cidReverse){
    console.log(due)
    if(troco - due[])
}
*/
console.log("Troco antes do loop " + troco + "\n");

let valorNota; 
let quantNotas;
let quantNotasNec;
for(let i = 0; i <= cidReverse.length - 1; i++){
    switch (i) {
        case  0:
            valorNota = 100;
            break;
        case 1:
            valorNota = 20;
            break;
        case 2:
            valorNota = 10;
            break;
        case 3:
            valorNota = 5;
            break;
        case 4:
            valorNota = 1;
            break;
        case 5:
            valorNota = 0.25;
            break;
        case 6:
            valorNota = 0.10;
            break;
        case 7:
            valorNota = 0.05;
            break;
        case 8:
            valorNota = 0.01;
            break;
    }

    

    quantNotas = cidReverse[i][1] / valorNota;
    quantNotasNec = Math.floor(troco/valorNota);

    if(troco - valorNota > 0){
        console.log("Sobre nota atual: " + valorNota + " Nome nota: " + cidReverse[i][0]) 
        console.log("troco antes do if " + troco);
        console.log("Valor total armazenado em notas pré-operação: " + cidReverse[i][1]);
        console.log("Quantidade de notas disponíves: " + quantNotas);
        console.log("Quantidade de notas necessárias: " + quantNotasNec);

        

        if(quantNotas >= quantNotasNec){
            troco =  parseFloat((troco - (quantNotasNec * valorNota)).toFixed(2));
            cidReverse[i][1] =  (parseFloat((cidReverse[i][1] - (quantNotasNec * valorNota)).toFixed(2)));

            console.log("Quantidade de notas usadas: " + quantNotasNec);
        }else{
            troco = parseFloat((troco - ((quantNotasNec - (quantNotasNec - quantNotas)) * valorNota)).toFixed(2));
            cidReverse[i][1] = parseFloat((cidReverse[i][1] - ((quantNotasNec - (quantNotasNec - quantNotas)) * valorNota)).toFixed(2));

            console.log("Quantidade de notas usadas: " + (quantNotasNec - (quantNotasNec - quantNotas)));
        }
        

        
        console.log("troco depois do if " + troco);
        console.log("Valor total armazenado em notas pós-operação " + cidReverse[i][1] + "\n");
    }else{
        console.log(`nota de valor ${valorNota} muito alto para o troco  de  ${troco}\n`)
    }

    
    if(troco === 0 ){break;}
}



/*
if(troco - cid[0[0] > 0]){

}else if(troco - cid[0[0]] === 0){

}else{

}
*/