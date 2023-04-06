'use strict';

let inp = document.querySelector('#inp');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');

let arr = [];
function add() {

    if (inp.value == 4) {
        let n = inp.value;
        let getNums = RandomNum(n);
        arr.push(getNums);


    } else if (inp.value == 8) {
        let n = inp.value;
        let getNums = RandomNum(n);
        arr.push(getNums);
    } else {
        console.error('not working..');
    }
    let newList = arr.join().split(',');
    let test = document.createElement('li');
    test.innerText = newList;
    list.appendChild(test);
    inp.value = '';


}
btn.addEventListener('click', add)


function RandomNum(n) {
    let newArr = [];

    for (let i = 1; i <= n; i++) {
        let rdm = Math.round(Math.random() * 10);
        newArr.push(rdm);
    }

    return newArr;

}
