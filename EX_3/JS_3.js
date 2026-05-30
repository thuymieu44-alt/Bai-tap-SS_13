let myString = prompt('Mời bạn nhập dãy số bất kì (a b c ...)');
const myArray = myString.split(' ');//Tách chuỗi thành các kí tự
let arrayRe= myArray.reverse();//Đảo ngược các phần tử
console.log(arrayRe);