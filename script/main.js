let son = +prompt("nechta misol yechmoqchisiz?");
for (let i = 0; i < son; i++) {
  let num = myRandom(20, 80),
    num2 = myRandom(40, 70),
    symbol = myRandom(1, 4),
    ans,
    answer;

  if (symbol == 1) {
    ans = +prompt(`${num} + ${num2} = ?`);
    answer = num + num2;
    
  } else if (symbol == 2) {
    ans = +prompt(`${num} - ${num2} = ?`);
    answer = num - num2;
   
  } else if (symbol == 3) {
   ans = +prompt(`${num} / ${num2} = ?`);
    answer = num / num2;
    
  } else if (symbol == 4) {
    ans = +prompt(`${num} * ${num2} = ?`);
    answer = num * num2;
   
  }
  if(answer== ans) {
      console.log("Javob togri")
  } else {
      console.log(`Javob notogri. sizning javob ${ans}. Togri javob ${answer}`)
  }
}

function myRandom(min, max) {

    return Math.round(Math.random() * (min - max) + max);

}
