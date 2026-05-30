let myArr = [1, 9, 6, 7, 5, 3, 9, 5, 9, 4, 9, 7, 9, 4];
let k = Number(prompt('Mời nhập vào một số nguyên (từ 1-9):'));
let count = 0;
for (let number of myArr) {
    if (k === number) {
        count = count + 1;
    }
}
alert(`Số ${k} lặp lại ${count} lần trong mảng.`);