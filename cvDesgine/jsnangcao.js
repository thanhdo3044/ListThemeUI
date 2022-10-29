

const promise = new Promise((resolve,reject)=>{
    reject("1255");
    resolve(1235);
});

// promise
// .then((res) => console.log(res))
// .catch((err)=> console.log(err))
// .finally(()=>{
//     console.log("finally");
// });
//async /await
const function1 = async()=>{
    const res = await promise;
    console.log(res);
}
function1

