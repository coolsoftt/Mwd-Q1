
//Calculating discount on product price

function Discount():string|number[]
{
    
    const myprompt=require(`prompt-sync`)();
     const pPrice=myprompt(`Enter product price:`);
    const pDis=myprompt(`Enter discount rate%`);
    let discountP=pPrice*(pDis/100)  //calculate discount amount
    let newPrice=pPrice-discountP;        //calculate new price after discount
 if( pDis>=50)
  return "Discount rate is invalid";
  else
  return  [pPrice,pDis,discountP,newPrice]
}
let result:(number[]|string)=Discount();
if (result[1]<50){

console.log("Original Price="+result[0]);
console.log("Discount%="+result[1]);
console.log("Discount="+result[2]);
console.log("New Price="+result[3]);}
else 
console.log(result);