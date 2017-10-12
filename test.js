const Canadian = require ('./canadian');

let rate = 0.91;
const canadaObj = new Canadian(rate);
console.log(canadaObj.canadianToUS(100))