

/*function addToCart(productName="Elma",quantity) {
    console.log("Sepette eklendi: " 
    + productName +"adet : " + quantity)
}

//addToCart()
addToCart(15)*/

/*let sayHello = ()=>{
    console.log("Hello World")
}

sayHello()*/

/*let sayHello2 = function () {
    console.log("Hello World2")
}
sayHello2()*/

/*function addToCart2(productName, quantity,unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = {
    productName:"Elma", unitPrice:10, quantity:5
}
function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)

let sayi1 = 10 
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}   

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]
addToCart4(products)

function add(bisey,...numbers ) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total = total + numbers[i]   
   }
   console.log(total)
   console.log(bisey)
}

add(20,40)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(30,10,500,600,120))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri]] = [
    {name:"İç Anadolu", populations : "20M"}, 
    {name:"Marmara", populations : "30M"}, 
    {name:"Kardeniz", populations : "10M"}, 
    [
      ["Ankara","Konya"], 
      ["İstanbul","Bursa"], 
      ["Sinop","Trabzon"]  
    ]
]

//console.log(icAnadolu.name)
//console.log(icAnadolu.populations)
//console.log(icAnadoluSehirleri)
//console.log(marmaraSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
*/



/*function findPrimeNumber(...numbers) {
    numbers.map(number=>{
    let isPrime = false;
    for (let i = numbers ; i < numbers.length; i++) {
        if (i % numbers == 0 ) {
            isPrime = true;
            break;
        }
    }
    if(isPrime == false){
        console.log( + "asal sayı değildir.")
    }else{
        console.log( + "asal sayıdır.")
    }
    )};
}

findPrimeNumber(10,12,13,17);
*/

/*
function perfectNumber() {
    for (let i = 1000; i > 0 ; i--) {
        let total = 0;
        for (let j = i ; j > 0; j--) {
            if (i % j == 0) {
                total += j;
            }
          
            
        }
        if (total == i * 2) {
            console.log(i + " mükemmel sayıdır.")
        }
        else{
            console.log(i + " mükemmel sayı değildir.")
        }

        
    }
}
perfectNumber()
*/

function friendNumber(sayi1, sayi2){
    
        let total1 = 0;
        for (let x = 0 ; x < sayi1; x++) {
            if (sayi1 % x == 0) {
                total1 +=x;
            }          
        }
        let total2 = 0;
        for (let y = 0; y < sayi2; y++) {
            if (sayi2 % y == 0) {
                total2 +=y;
            }   
        }
    if (total1 == sayi2 && total2 == sayi1) {
        console.log(sayi1 + " ve " + sayi2 + " arkadaş sayılardır.")
    }
}

friendNumber(1184, 1210)