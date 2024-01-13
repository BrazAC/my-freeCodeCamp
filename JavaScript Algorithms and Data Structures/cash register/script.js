const cashInput = document.getElementById('cash');
const changeDiv = document.getElementById('change-due');
const purchaseButton = document.getElementById('purchase-btn');

let price;
let cash = cashInput.value;
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

