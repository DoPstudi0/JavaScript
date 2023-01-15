let admin;
let name;
name = "Джон";
admin = name;
console.log(admin)

//баланс пользователя
let balance = 25000;
console.log(`Баланс: ${balance}`)

//траты 
let car = 4480;
let food = 890;
//плюсовать траты.
let car_food = car + food;
//вывести итог трат 
console.log(`Расходы: ${car_food}`)


//доходы
let invoice = 5500;
let stock = 4200;
//плюсовать доход.
let inv_st = invoice + stock;
//вывести итог дохода
console.log(`Доход: ${inv_st}`)


//отнять доход от трат 
let profit = inv_st - car_food;
console.log (`Прибыль ${profit}`)

//итоги
let calculation = inv_st - car_food;
let totalBalance = calculation + balance ;
console.log(`Итог: ${totalBalance} сум` )







