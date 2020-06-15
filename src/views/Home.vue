<template>
  <div class="home">
      <div class="loged-in-user" v-if="isLogedIn">
      <div>hello {{userName}}</div>
      <div>coins {{userCoins}}</div>
    </div>
    <login v-if="!isLogedIn"></login>
      <div>btc rate {{bitcoinRate}} USD</div>
      <div class="btcChart">
      btc chart will be added later
    </div>
    <div class="lastTtansactions">{{lastThreeTx}}</div>
 </div>
</template>

<script>
import Login from '../components/Login.vue'
export default {
  name: 'home',

  data(){
    return {
      isLogedIn : false
    }
  },
  components: {
    Login
  },
  created(){
    this.$store.dispatch({ type:"BitcoinModule/getRate"})
  },
   computed:{
     bitcoinRate(){
       return this.$store.state.BitcoinModule.bitcoinRate
     },
     userName(){
        return this.$store.state.UserModule.user.name
     },
     userCoins (){
        return this.$store.state.UserModule.user.coins
     },
     lastThreeTx(){
        return this.$store.getters['UserModule/lastThreeTrxs']
      },
     logiName(){
        return (this.$store.state.UserModule.user===null)? null: this.$store.state.UserModule.user.name
           }
   },
   watch: {
      logiName: function () {
       this.isLogedIn=!this.isLogedIn;
    },
}
}
</script>


<style lang="scss">
.btcChart{
  width:100%;
  height:50px ;
  background-color: aqua;
}
.lastTtansactions {
  width:100%;
  height:50px ;
  background-color: rgb(111, 0, 255);
}

</style>
