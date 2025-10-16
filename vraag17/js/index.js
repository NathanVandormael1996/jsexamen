// Vraag 17
let namen = [];
let aantal = parseInt(prompt("Hoeveel namen wil je ingeven?"));
for(let i=1;i<=aantal;i++)
{
    namen.push(prompt(`Geef naam ${i} in aub:`))
}
for(let naam of namen)
{
    if (naam.length > 5) console.log(naam);
}
