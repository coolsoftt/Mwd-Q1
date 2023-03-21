function factnum() {
  /** get the input from prompt to calculate the factorial */
  const myprompt = require(`prompt-sync`)();
  let num = myprompt(`Enter a number:`)
  
  if (num < 0) return 'invalid number';
  if (num == 0) return 1;
  
  for (let a = num - 1; a >= 1; a--) {
    num = num*a;
  }
  
  return (num)
}


console.log("factorial=" + factnum());