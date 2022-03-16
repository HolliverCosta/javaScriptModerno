const apiCall = new Promise((resolve, reject) => {
    setTimeout(()=>{
       // resolve('Sucesso!');
        reject('erro');
    }, 2000);
});

// apiCall.then((response)=>{
//     console.log(response);
// }).catch((erro)=>{
//     console.log(erro)
// });


async function run(){
    try {
        const response = await apiCall;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

run();