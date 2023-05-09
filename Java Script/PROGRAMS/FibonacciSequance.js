const num = parseInt(prompt("Enter a Number of Terms:"));
let [x,y] = [0,1];
let nextNumber , count = 0;
document.write(x+"  "+y);
do{
    count += 1;
    nextNumber = x+y;
    document.write(`${nextNumber}  `);
    x = y;
    y = nextNumber;
}while(count < num-2);