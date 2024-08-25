// დავალება_1
const nums = [1, 2, 3, 4, 5];

for(let i = 0; i < nums.length; i++) {
    }    console.log(nums[i]);

//დავალება_2
const numsType = [];

for(let i = 0; i < 10; i++) {
    const numType = {
        value: i,
        type: ''
    }

    if(i % 2 === 0) {
        numType.type = 'Even';
    } else {
        numType.type = 'Odd';
    }

    numsType.push(numType);
}


console.log(numsType);

//დავალება_3

let authorized = false;
let count = 3;

while (authorized !== true && count > 0) {
    const pass = prompt("Enter your password:");
    
    if (pass === "luka") {
        authorized = true;
        alert("Access granted!");
    } else {
        count--;
        alert("Access denied. You have " + count + " attempts left.");
    }
}