const  user ={
  "_id": "5a56640269f443a5d64b32ca",
  "name": "natalia",
  "email": "ochoahyde@renovize.com",
  "phone": "+1 (968) 593-3824",
  "coins":100,
  "transactions": []
}

function addTransaction(txData){
      return new Promise((resolve) => { 
        //console.log('check', user)
          user.transactions.push(txData)
      resolve()
    })
  } 

function doLogin (name){
  console.log('login', name)
return new Promise ((resolve,reject)=>{
  (user.name===name)? resolve(user) : reject('not found')
   })
}


export default {
  addTransaction,
  doLogin
}