
console.log('before66');
const promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            name: 'tom',
            age:22
        });
       // reject('something went wrong');
    },5000)
});

console.log('before');

promise.then((data)=>{
    console.log('1',data);
  //  return 'some data';
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('data from promise');
        },5000);
    });
}).then((data)=>{
    console.log('does it run? ===',data);
})
.catch((error)=>{
    console.log('error-',error);
});

console.log('after');