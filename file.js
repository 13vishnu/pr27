//array-slice
var foods = ["pizza","burger","fingerChips","donuts","springRoll" ]
 var a=foods.slice(1, 4);
console.log(a);

//array-splice
foods.splice(2,0,"noodles","icecream")
console.log(foods)

//filter
const numberArray=[12,324,213,4,2,3,45,4234]
var a=numberArray.filter(function(value){
    return value % 2==0
})
console.log(a);

//reject
let ab=[];
function nonPrime(numberArray){
   
   if(numberArray<2) return false;
   for(let j=2;j<numberArray;j++){
    if(numberArray%j==0){
        return false;
    }
   }
   return true;
    
   }
   numberArray.forEach(function(item){
    var val=nonPrime(item);
    if(val){
        a.push(item)
    }
   })
   console.log(ab);

   //map
   const myArray=[11,34,20,5,53,16]
   var square= myArray.map((value)=> value*value) ;
   console.log(square);

   //reduce
   var multipleArray=myArray.reduce((c, value)=> c*value)
   console.log(multipleArray)
