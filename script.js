const number = Math.floor(Math.random()*100);
console.log(number);

if (number % 5 == 0 ) {

console.log("odd"); 

}
else if (number % 3 == 0 ) {


    console.log("even");
}

else {

    console.log("real");

}

//for loop
for (let i = number; i <= 100; i++){

    console.log(i);
}

//while 

let i = number;
while (i <= 100) {

    console.log(i);
    i++;


}
let k = number;

switch (k) {


case 4:
    console.log("bat");
    break;

    case 5:
        console.log("barani");
        break;

        case 17:
            console.log('zero');
            break;

            default:
                console.log("win");



}

for (let i = number; i <= 100; i++) {

if (i == 12){

    break;
}
console.log(i);

}

function greeting(p){

    let result = 'hello' + " " + p
    console.log(result);

}
greeting ("barani");
greeting("kalai");