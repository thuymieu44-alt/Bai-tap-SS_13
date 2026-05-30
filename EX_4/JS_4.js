let myString = prompt('Mời bạn nhập dãy số bất kì (a b c ...)');
let myArray = myString.split(' ');
let max = myArray[0] //Gán giá trị đầu tiên là max để so sánh
for (let i = 1; i < myArray.length; i++) {
    if ( max < myArray[i]) {
        max = myArray[i];
    }
}
alert('Giá trị lớn nhất là:' + max );