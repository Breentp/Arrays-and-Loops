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

console.log(numDiv(n));


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
        res4 = `${arr4[0]} is online`;
    } else if (count === 2 ) {
        res4 = `${arr4[0]}, ${arr4[1]} are online`;
    } else {
        res4 = `${arr4[0]}, ${arr4[1]} and ${count - 2} more are online`;
    }
    return res4;
}

console.log(onlineUsers(users));

//////////////////////////////////////////////////////////


//* Array of Multiples

const multi2 = [2, 10];
const multi17 = [17, 6];

function multiTable(arr5) {
    let res5 = [];
    let tab = 0;
   /* for (let i = arr5.length - 1; i = 0; i--) {
        tab = arr5 * i;
        res5.push(tab);
        res5.push(tab);
    }
    return res5; */
    arr5.forEach((tab) => res5.push(arr5 * tab))
}
console.log(multiTable(multi2));

//////////////////////////////////////////////////////////



//* Positive dominance in Array

const metriz1 = [-1, -3, -5, 4, 6767];
const metriz2 = [13, 4, 96, -21, 58];

function positiveMet(arr6) {
    res6 = [];
    for (let i = 0; i = arr6.lenght; i++) {
        if (arr6 > 0) {
            res6.push(arr6);
        }
    }
     if ((res6.lenght - 1) > arr6.lenght) {
        console.log("The array is positively dominant.");
     } else {
        console.log("The array is negatively dominant.")
     }
}

//////////////////////////////////////////////////////////


//* Antipodal Average