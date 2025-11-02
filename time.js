
const startTime=performance.now("talk");

for (let i=0; i<=500; i++){
    console.log(i)
}

const endTime=performance.now("talk");

console.log(`This code took ${endTime - startTime} ms`)