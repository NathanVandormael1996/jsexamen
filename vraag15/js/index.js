// Vraag 15
function isEven(getal){
    return getal % 2 === 0;
}
let getallen = [0,1,2,3,4,5,6,7,8,9,10];
for(let getal of getallen) {
    if (isEven(getal)) console.log(getal);
}
