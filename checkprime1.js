

let num=7;
let count=0;
for(let i=1;i<num.length;i++)
  {
    if(num%i==0){
      count++
    }
  }if(count=2){
  console.log("prime")
  }else{
  console.log("not prime")
  }