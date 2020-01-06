const somethingWillHappen = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Hey');
        }else{
            reject('Whoops');
        }
    })
}

somethingWillHappen()
.then(response=>console.log(response))
.catch(err=>console.log(err))

const somethingWillHappens2 = () => {
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('true')
            },2000)
        }else{
            const error = new Error('Whoops');
            reject(error)
        }
    })
}

somethingWillHappens2()
.then(response=>console.log(response))
.catch(err=>console.log(err))

Promise.all([somethingWillHappen(), somethingWillHappens2()])
    .then(response=>{
        console.log('Array of results', response);
    }).catch(err=>{
        console.error(err);
    })