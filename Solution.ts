let formatValue = (Value : (string | number | boolean)): string | number | boolean => {

    if( typeof Value === "string" ){
      return Value.toUpperCase();
    } else if ( typeof Value === "number"){
        return Value * 10 ;
    } else if ( typeof Value === "boolean"){
        return !Value ;
    }

    return Value; 
}
 

let getLength = (Value : (string | Array<any>)): number => {


    if(typeof Value === "string"){
        return Value.length;
    }else if (Array.isArray(Value)){
        return Value.length;
    }

    return 0 ;
}



class Person {

name : string;
age : number ;

constructor(name : string, age : number){
    this.name = name ;
    this.age = age ;
}

 getDetails(){
    return `Name: ${this.name}, Age: ${this.age}`
}
}



type filterRating = {

   title : string;
   rating : number;

}


const filterByRating = ((items : filterRating[]) => {

  return items.filter(item =>  item.rating >= 4);

}) 



type ActiveUser = {
        id : number;
        name : string;
        email : string;
        isActive: boolean;
  }


const  filterActiveUsers = (arr : ActiveUser[]) : ActiveUser[] => {

 return arr.filter(user => user.isActive === true )

}



interface Book {

title: string;
author : string;
publishedYear : number;
isAvailable : boolean;

}

const printBookDetails = ((bookList : Book): void =>  {

  const result = (`Title: ${bookList.title}, Author: ${bookList.author}, Published: ${bookList.publishedYear}, Available: ${bookList.isAvailable ? "Yes" : "No"}`)

  console.log(result);
}) 



const getUniqueValues = (arr1: (number | string) [], arr2: (number | string) []):(number | string)[] => {
    let uniqueValue: (number | string) [] = [];
    const combinedArray = [];

    for (let i = 0; i < arr1.length; i++) {
        combinedArray.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        combinedArray.push(arr2[i]);
    }

    for (let i = 0; i < combinedArray.length; i++) {
        let exists = false;

        for (let u = 0; u < uniqueValue.length; u++) {
            if (uniqueValue[u] === combinedArray[i]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            uniqueValue.push(combinedArray[i]);
        }
    }

    return uniqueValue;
};


interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;  
}

const calculateTotalPrice = (products:Product[]):number => {

return products.reduce((total,product) => {

let totalPrice = product.price * product.quantity;

if(product.discount){

  totalPrice = totalPrice - (totalPrice * product.discount) / 100;

}

return total + totalPrice;

}, 0 )


}