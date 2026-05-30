let numbers = prompt('Mời nhập các số nguyên (10-20 số):');
if (numbers === null) {
} else {
  const myArr = numbers.trim().split(/\s+/).map(str => parseInt(str, 10)); // Tách chuỗi thành mảng số
  if (myArr.length < 10 || myArr.length > 20) {
    alert('Dãy số nhập vào không hợp lệ, vui lòng nhập lại');
  } else {
    let sumEven = 0; // Tổng các số chẵn
    let sumOdd = 0;  // Tổng các số lẻ
    for (let i = 0; i < myArr.length; i++) {
      if (myArr[i] % 2 === 0) sumEven += myArr[i];
      else sumOdd += myArr[i];
    }
    alert(`Tổng các số chẵn là: ${sumEven}\nTổng các số lẻ là: ${sumOdd}`);
  }
}
