function pow(x, n){
    return x ** n
}
console.log(pow(2, 5))

function sqrt(x){
    return x ** (1/2)
}
console.log(sqrt(9))

function abs(x){
    if(x > 0){
        return x
    }else{
        return x * (-1)
    }
}
console.log(abs(-8))


function floor(x){
   let num = x.toFixed(0.5) 
   if(num > x ){
    return x.toFixed(0.5) - 1 
   }else{
    return x.toFixed(0.5) 
   }
 }
 console.log(floor(9.8))

function  ceil(x){
    let num = x.toFixed(0.5) 
    if(num > x ){
     return x.toFixed(0.5)  
    }else{
     return x.toFixed(0.5) - 1 + 2
    }
 }
 console.log(ceil(-2.4))

 function  round(x){
    return x.toFixed(0.5)
 }
 console.log(round(5.8))

 function trunc(x){
    let num = x.toFixed(0.5) 
    if(num > x ){
     return num * 1
    }else if( num < 0){
     return num - 1 + 2
    }else{
        return num
    }
  }
  console.log(trunc(5.4))









// console.log(Math.trunc(12.6))
