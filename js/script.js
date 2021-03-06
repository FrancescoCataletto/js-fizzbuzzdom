/*

Scrivi un programma che stampi in console i numeri da 1 a 100.
**MILESTONE 1**
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
**MILESTONE 2**
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
**MILESTONE 3**
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

*/

// MILESTONE 1

const limit = 100;

const divThree = 3;

const divFive = 5;


for(let i = 1; i <= limit; i++){

   const containerDom = document.querySelector(".container");
   const boxDom = document.createElement("div");
   boxDom.className = "box";

   if(i % 3 === 0 && i % 5 === 0){
       boxDom.append("fizzbuzz");
       boxDom.classList.add("red");
   }else if(i % 5 === 0){
       boxDom.append("buzz");
       boxDom.classList.add("yellow");
   }else if(i % 3 === 0){
       boxDom.append("fizz");
       boxDom.classList.add("green");
   }else{
       boxDom.append(i);
   }

   containerDom.append(boxDom);
};

