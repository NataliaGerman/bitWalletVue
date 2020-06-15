 import UserService from '../services/UserService.js'
const UserModule = {
  strict: true,
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    addTransaction (state,{txData}){
      state.user.transactions.unshift(txData);
      const currCoins=state.user.coins;
      state.user.coins=currCoins-txData.coins;
    },
    setUser(state, {serverUser}){
      state.user=serverUser
    }
  },

  getters: {
    lastThreeTrxs(state){
            if(state.user){
        var trxs=[...state.user.transactions].sort((a,b)=>(a.date<b.date)? 1:-1);
        return trxs.splice (0,3)
      }else{
        return 'no transactions'
      }
    } 
   },

  actions: {
    addTransaction(context, {txData}){
      var copy=JSON.parse(JSON.stringify(txData))
      return UserService.addTransaction(copy)
      .then(()=>
      context.commit ({type: "addTransaction", txData:copy}))
    },

    doLogin(context, {user}){
      return UserService.doLogin(user.name)
      .then ((serverUser)=>{
        if(serverUser){
          context.commit ({type: "setUser", serverUser})
        } else{
          console.log('failed login')
        }
      })
    }
  }
}  




export default UserModule;