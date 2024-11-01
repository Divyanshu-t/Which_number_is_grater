let first_val = Number(prompt("Enter First Number ")) ;
let second_val = Number(prompt("Enter Second Number ")) ;

if(first_val===second_val){
    document.write(`Your First Value " ${first_val} " and Second Value " ${second_val} = Both are Equal `);
}else if(first_val>second_val){
    document.write(`Your First Value " ${first_val} " is Gratest Value  `);
}else if(first_val<second_val){
    document.write(`Your Second Value " ${second_val} " is Grater Value   `)
}