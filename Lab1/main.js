// let sv = "trinh ha duc sang"
// let sv2 = "vu anh tu"
// let tenSV = ""
// let result = sv.split(' ')
// for (let item of result) {
//     tenSV += item[0].toUpperCase() + item.slice(1) + " "
// }
// console.log(tenSV);

// đảo ngược mảng
// let result2 = sv.split('');
// const reverseString = (someString) => {
//     const length = someString.length;
//     let result = "";
//     for (let i = length - 1; i >= 0; i--) {
//         result += someString[i];
//     }
//     return result;
// }
// let someString = "I am a string";
// console.log(reverseString(someString));

//Number data-type
//Bài 1: Cho chuỗi số [4,6,1,5,-6,2,8,1,9,3]

// let a = [4, 6, 1, 5, -6, 2, 8, 1, 9, 3];
// let max;
// let min;

// for (let item of a) {
//     max = max > item ? max : item;
//     min = min < item ? min : item;
// }
// console.log('Giá trị lớn nhất là: ', max);
// console.log('Giá trị nhỏ nhất là: ', min);

// //Tìm giá trị lớn thứ hai
// let max2;
// for (let item of a) {
//     if (item != max)
//         max2 = max2 > item ? max2 : item;
// }
// console.log('Giá trị lớn thứ 2 là: ', max2);

// Array data-type
// Bài 1:
let classRoom = [
  "nguyễn tiến duẩn",
  "Hoàng Xuân Hiếu",
  "Hồ Sỹ Hưng",
  "Nguyễn Đức Thuận",
  "đoàn Minh Tùng",
  "Hồ Sỹ Hùng",
  "Lê Trung Hiếu",
  "đoàn vua dep trai vua hoc gioi Hữu Quý",
];

//Bai 1

document.querySelector(".convert").addEventListener("click", function () {
  const string = document.querySelector(".string").value;
  // console.log(string);

  const stringConvertArr = string.split(" ");
  // console.log(stringConvertArr);

  const stringNumber0 = stringConvertArr.shift().toLowerCase();
  // console.log(stringNumber0);

  const stringResult = stringConvertArr.map(function (parts) {
    const resultParts = parts.split("");
    const partNumber0 = resultParts.shift().toUpperCase();
    // console.log(resultParts[0]);

    // console.log(resultParts.join(""));
    return partNumber0 + resultParts.join("").toLowerCase();
  });

  // console.log(stringResult);
  const camelCase = stringNumber0 + stringResult.join("");
  document.querySelector(".result").innerHTML = camelCase;
  // console.log("\nResult: ", camelCase);
});

//Bai 2
console.log("Bai 2");
// Câu 1: Tach ten va ho rieng
console.log(" 1: Tách họ và tên");

let names = classRoom.map(function (fullName) {
  const parts = fullName.split(" ");
  // console.log(parts);
  const firstName = parts.pop(); //xoá và lấy phần tử cuối của mảng
  // console.log(firstName);
  const lastName = parts.join(" "); //họ, join thành 1 chuỗi
  return { lastName, firstName };
});

console.log("Kết quả");
console.log(names);

// Câu 2: Thêm một sv vào một vị trí bất kỳ trong mảng
console.log("\n 2: Thêm một sv vào một vị trí bất kỳ trong mảng");

const indexToInsert = 2;
const newStudent = "Nguyễn Văn A";
console.log("Thêm sinh viên", newStudent, "vào vị trí số", indexToInsert);

classRoom.splice(indexToInsert, 0, newStudent);
console.log(classRoom);

// Câu 3: Xoá một sinh viên khỏi mảng
console.log("\n 3: Xoá sinh viên khỏi mảng");

const studentToDelete = "Nguyễn Văn A";
console.log("Xóa sinh viên: ", studentToDelete);

const indexToDelete = classRoom.indexOf(studentToDelete);
// console.log(indexToDelete);
classRoom.splice(indexToDelete, 1);
console.log(classRoom);

// Câu 4: Tìm kiếm theo tên, không chứa dấu
console.log("\n 4: Tìm kiếm theo tên, không chứa dấu");

//Hàm xóa dấu
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const searchName = "nguyen";
console.log("Tìm kiếm tên: ", searchName);

const foundStudents = classRoom.filter((student) => {
  const normalizedSearchName = removeAccents(searchName)
    .toLowerCase()
    .replace(/ /g, "");
  //    / /g được sử dụng để tìm tất cả các khoảng trắng (dấu cách) trong chuỗi và thay thế chúng bằng một chuỗi rỗng ''
  const normalizedStudentName = removeAccents(student)
    .toLowerCase()
    .replace(/ /g, "");
  return normalizedStudentName.includes(normalizedSearchName);
});

console.log("Kết quả ", foundStudents);
