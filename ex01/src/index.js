const array1 = ['MON', 'TUE', 'WEN', 'THU', 'FRI'];

function main(arr) {
    // Only change code below this line

    let array2 = [...arr]; // Change this line
   
    // Only change code above this line
     return array2;
}

console.log(main(array1));
module.exports = main;