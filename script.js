const cart=["pant","shirt","kurtha"];

addtocart(cart)
.then(function (orderId){
    console.log(orderId)
    return orderId
})



.then(function(orderId){
  return  proceedtopayment(orderId);
})
.then(function (paymentInfo){
    console.log(paymentInfo);
})
.catch(function (err){
console.log(err);
})


function addtocart(cart){
    const pr= new Promise(function (resolve,reject){
        if(!validecart()){
            let err=new Error("no item added to cart");
            reject(err);
        }
        const orderId="1234";
        resolve(orderId);


    })

    return pr;
}

function validecart(){
    return false;
}

function proceedtopayment(orderId){
    const pr1=new Promise(function(resolve,reject){
        resolve("addedd two items");
    })
    return pr1;
}