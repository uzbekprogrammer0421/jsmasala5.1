// 1-task


// function prime_number(params) {
//     let result = "Tub son emas"
//     let count = 0
//     for (let index = 0; index <= params; index++) {    
//         if (params % index === 0 ) {
//             count ++
//         }    
//     }
//     if (count === 2) {
//         result = " Tub son "
//     }
//     console.log(result); //// Assalomu alaykum tuzumisiz bu joyga console.log() yozishim sababi birinchi qiymat chiqmayabdi
//     return result
// }
// prime_number(7)


// 2-task 1-usul


// let number = 32
// let k = 0
// while(number > 1){
//     k++
//     number /= 2
// }
// console.log(k);


// 2-task 2-usul


// let number = 8
// let k = 0
// for (let i = number; i > 1; i/=2) {
//     k++
// }
// console.log(k);


// 3-task


// function perfect_number(params) {
//     let result = "Mukammal son emas"
//     let count = 0
//     for (let index = 0; index < params; index++) {    
//         if (params % index === 0 ) {
//             count += index
//         }    
//     }
//     if (count == params) {
//         result = " Mukammal son "
//     }
//     console.log(result);
//     return result
// }
// perfect_number(28)


// 4-task  1-usul


// let number = 32
// let k = 0
// for (let i = number; i > 1; i/=10) {
//     k++
// }
// console.log(k);


// 4-task 2-usul 


// let number = 325
// let k = 0
// while(number > 1){
//     k++
//     number /= 10
// }
// console.log(k);


// 5-task 


// function word(...params) {
//     let arr = [...params]
//     let count = 0
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index].includes('a' && 'A')) {
//             count ++
//         }
//     }
//     console.log(count);
//     return count
// }
// word("Asilbek","Abdullayev","Anvar o'g'li")


// 6-task 


// function word(...params) {
//     let arr = [...params]
//     let count = 0
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index].includes('a' && 'A')) { // bu joyda katta A ni ham tekshirib qo'ydim faqat kichik a qilmasdan
//             count ++
//         }
//     }
//     console.log(count);
//     return count
// }
// word("Asilbek","Abdullayev","Anvar o'g'li")


// 7-task 


// function word(...params) {
//     let arr = [...params]
//     let big = arr[0]
//     for (let index = 0; index < arr.length; index++) {
//         if ((arr[index].trim().length) < big.length ) {
//             big = arr[index]
//         }
//     }
//     console.log(big);
//     return big
// }
// word("Asilbek","Abdullayev","Anvar o'g'li")


// 8-task 


// function type(params) {
//     if(typeof(params) === 'string' ){
//         console.log("string");
//         return "string"
//     }
//     else if(typeof(params) === 'number' ){
//         console.log("son");
//         return "son"
//     }
//     else {
//         console.log(0);
//         return 0
//     }
// }
// type(true)


// 9-task 1-usul


// function countNumbers(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '1' || str[i] === '2' || str[i] === '3' || str[i] === '4' || str[i] === '5' || str[i] === '6' || str[i] === '7' || str[i] === '8'|| str[i] === '9' || str[i] === '0') {
//             count++
//         }
//     }
//     console.log(count);
// }

// countNumbers("Asilbek2077804");


// 9-task 2-usul


// function countNumbers(str) {
//     const numbers = str.match(/\d/g);
//     return numbers ? numbers.length : 0;
// }
// console.log(countNumbers("akasd12345"));


// 9-task 3-usul


// function countNumbers(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(parseInt(str[i]))) {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countNumbers("Asilbek2067804");


// 10-task 


// function reverse_num(x) {
//     let item = x
//     let massiv = Array.from(item.toString(), Number).reverse()
//     let result = massiv.join("")
//     console.log(result);
// };
// reverse_num(21)