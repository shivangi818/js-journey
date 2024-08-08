//method 1
let price=[250,645,300,900,50];
let idx=0;
for(let val of price){
    console.log(`value at index ${idx} = ${val}`);
    let offer=val/10;
    price[idx]=price[idx]-offer;
    console.log(`value offer =${price[idx]}`)
    idx++;
}

//method 2
let price1=[250,645,300,900,50];
for(let i =0; i<price1.length;i++){
    let offer1= price1[i]/10;
    items[i]-=offer1;

}
console.log(price1);

