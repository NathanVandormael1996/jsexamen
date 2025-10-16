// Vraag 16
let getallen = [];
for(let i=1; i<=5;i++)
{
    getallen.push(parseInt(prompt(`Geef getal ${i} aub:`)));
}
for(let getal of getallen)
{
    if(getal >10) console.log(getal);
}
