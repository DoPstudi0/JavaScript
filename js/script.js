//задание 1
let str = 'aaa@bbb@ccc';


console.log(
    str.replace(/@/g, '!')
);
//конец задания 1

//задание 2
let text = 'HELLOWORLD'
let textwo = text.slice(0, text.search('O') + 1).toLowerCase();
let texthree = textwo.charAt(0).toUpperCase() + textwo.slice(1);
let textfour = text.slice(text.search('O') + 1).toLowerCase();

console.log(texthree, textfour);
//конец задания 2

//задание 3
let title = 'Hello, it is HTML';
let js = ' not JS';


console.log(
    title.slice(title.search('Hello, it is'), title.search('Hello, it is') + 12) +
    js
);
//конец задания 3

//задание 4
let user_name = 'alex'

console.log(
    user_name.charAt(0).toLocaleUpperCase() + user_name.slice(1)
);
//конец задания 4

//задание 5
let num = Math.random() * 100000000000000000


console.log(
    num
);
//конец задания 5




//задание 6
let change = 'Lex Luter has a big suit';

console.log(
    change.slice(change.search('a'), change.search('a') + 1).toUpperCase() +
    change.slice(change.search('L'), change.search('L') + 1).toUpperCase() +
    change.slice(change.search('e'), change.search('e') + 1) +
    change.slice(change.search('x'), change.search('x') + 1)
);
//конец задания 6