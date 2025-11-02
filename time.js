
const startTime=performance.now("talk");

for (let i=0; i<=500; i++){
    console.log(i)
}

const endTime=performance.now("talk");

console.log(`This code took ${endTime - startTime} ms`);



const startTime1 =performance.now("talk")
for (let i=0; i<=5000; i++){
    console.log(i)
}
const endTime1=performance.now("talk");

console.log(`This code took ${endTime1 - startTime1}`);


const startTime2=performance.now("talk")
for (let i=0; i<=4000; i++){
    console.log(i)
}
const endTime2=performance.now("talk");

console.log(`This code took ${ endTime2 - startTime2} ms`);



console.time("task")
for (let i=0; i<=5000; i++){
    console.log(i)
}
console.timeEnd("task")