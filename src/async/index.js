const doSomenthingAsync = () => {
    return new Promise ((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve('Do something async'),3000)
        :reject(new Error('test Error'))
    })
}

const doSomenthing = async () => {
    const something = await doSomenthingAsync()
    console.log(something)
}

console.log('Before');
doSomenthing();
console.log('After');

const anotherFunction = async() =>{
    try {
        const doSomenthing = await doSomenthingAsync();
        console.log(doSomenthing)
    } catch (error) {
        console.error(error)
    }
}
console.log('Before 1');
doSomenthing();
console.log('After 1')
