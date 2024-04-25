//* Sum of Resistors in Series
const resistors1 = [-1, 5, 6, 3];
const resistors2 = [14, 3, 5, 6];
const resistors3 = [8, 15, 100];

function sumResitance(arr) {
    const arr2 = [];
    let res = 0;
    arr.forEach((e) =>arr2.push(Math.abs(e)));
    arr2.forEach((e) => (res = res + e));
    console.log(`${res} ohms`)
}

function sumResitance2(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += Math.abs(arr[i]);
    }
    return res;
}
sumResitance(resistors3);
const intent2 = sumResitance2(resistors1);
console.log(intent2);

//////////////////////////////////////////////////////////

//* Number divided into halves
const n = 4;
const n2 = 10;

function numDiv(num) {
    let res2 = [];
    const half = num / 2;
    res2.push(half);
    res2.push(half);
    return res2;
}

console.log(numDiv(n2));


//////////////////////////////////////////////////////////


//* Secret Society
const members1 = ["Esperanza", "Franco", "Nia"];
const members2 = ["Phoebe", "Ross", "Chandler", "Joey", "Monica", "Rachel"];
const members3 = ["Harry", "Ron", "Hermione"];

function secretName(arr3) {
    let res3 = [];
    arr3.forEach((e) => res3.push(e.charAt(0)));
    return res3.sort().join("");
}

console.log(secretName(members1));
console.log(secretName(members2));
console.log(secretName(members3));


//////////////////////////////////////////////////////////


//* Online status

const users = ["mocklng99", "J0eyPunch", "glassedFer"];

function onlineUsers(arr4) {
    const count =users.length;
    let res4;
    if (count === 1) {
        res3 = `${arr3[0]} is online`;
    } else if (count === 2 ) {
        res3 = `${arr3[0]}, ${arr3[1]} are online`;
    } else {
        res3 = `${arr[0]}, ${arr[1]} and ${count - 2} more are online`;
    }
    return res3;
}

//////////////////////////////////////////////////////////


//* Array of Multiples


//////////////////////////////////////////////////////////



//* Positive dominance in Array


//////////////////////////////////////////////////////////


//* Antipodal Average