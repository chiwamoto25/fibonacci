'use strict';
const memo = new Map();
//決まっているものなので最初からいれておく
memo.set(0, 0);
memo.set(1, 1);

function fib(n){
  //データがあればそれをつかう
  if(memo.has(n)){
    return memo.get(n);
  } else {
  //データがなければ計算する
    let value = fib(n-1) + fib(n-2);
    memo.set(n,value);
    return value;
  }
  
}
for (let i = 0; i <= 1000; i++){
  console.log(i + "フィボナッチ数は" + fib(i) + "です。");
}
