
//1
// var name = prompt("Enter your name");
// console.log("Hello ", name);

//2
// const curr_year = 2020;
// var year = prompt("Enter your birthday year");
// console.log(curr_year - year);

//3
// var per = prompt("Enter the lenght of square");
// console.log("Perimeter of square is = ", 4 * per);

//4
// var raza = prompt("Enter the radius of circle");
// console.log("Radius of circle is = ", 3.14 * Math.pow(raza, 2));

//5
// var dist = prompt("Enter the distance");
// var time = prompt("Enter the time you need");
// console.log("Your speed will be", dist / time, "km/hour");

//6
// var money = prompt("Enter the amout of dollars");
// const exchange = 1.12;

// console.log("You will get ", money / exchange);

//7
// var size = prompt("Enter the size of FlashUSB");
// const movie = 850;
// console.log("you will copy ", size / movie, " files")

//8
// var money = prompt("Enter the amount of money you have");
// const chocolate = 25;
// var amount = money % chocolate;
// var temp = money - amount;
// console.log("You will by ", temp / chocolate, " chocolates. Balance will be  ", amount)

//9
var number = prompt("Enter the a three digit number");
var temp = number % 10;
var number2 = number.substring(0, 2);
console.log(number2);
var temp2 = number2 % 10;
var temp3 = number.substring(0, 1);

console.log(temp, temp2, parseInt(temp3));
document.write(temp, temp2, temp3);


//10
// var number = prompt("Enter a number");
// number % 2 == 0 ? console.log("Even") : console.log("Odd");