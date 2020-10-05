let num = prompt("Enter a positive integer");
let numberOfDigits = num.length;
let s= 0;
let temp = num;

while (temp > 0) {

    let remainder = temp % 10;
    s+= remainder ** numberOfDigits;
    temp = parseInt(temp / 10); 
}
if (s == num) {
    console.log(`${num} is an Armstrong number`);
}
else {
    console.log(`${num} is not an Armstrong number.`);
}
