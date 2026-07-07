function getdata(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("data sended delay of 5 sec");
        }, 5);
    });
}

async function name() {
    const get=await getdata();
    console.log(get);
    
}

name();
console.log("program ended");


async function data(){
    const response=await fetch("https://dummyjson.com/users");
    const user=await response.json();
    console.log(user.data);
}
data();