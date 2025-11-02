
const firstArray= [];
const secondArray=[];

for (let i=0; i< 600000; i++){
    
    if(i <300000){
        firstArray.push(i);
    }
    secondArray.push(i);
}

console.log("first array", firstArray.length);
console.log("second array", secondArray.length);






const firstArray1=[];
const secondArray1=[];

for (let i=0; i<800000; i++){
    if(i<400000){
        firstArray1.push(i)
    }
    secondArray1.push(i);
}

console.log("first array 1", firstArray1.length);
console.log("second array 1", secondArray1.length);

const firstUserList =firstArray1.map((number)=>({userId:number}));
const secondUserList=secondArray1.map((number)=>({userId:number}))
