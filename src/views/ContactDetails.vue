<template>
  <div>
    <div v-if="currContact">
      <div >{{currContact.name}}</div>
      <div>{{currContact.email}}</div>
      <div>{{currContact.phone}}</div>
    </div>
    <input required class type="text" placeholder="amount" v-model="amount">
    <button @click="updateTranction">trunsfer</button>
    <div v-if="ifNoFunds" >not enough funds, you can't trunsfer more than {{coins}} coins</div>
    <div v-if="ifSuccess">You have successfuly transfered {{lastAmount}} to {{currContact.name}}</div>
  </div>
</template>

<script>
 export default {
   name: "ContactDetails",
   data(){
     return{
       amount:null,
       lastAmount:null,
       ifNoFunds:false,
       ifSuccess: false,
     }
   },

   created(){
     const contactId=this.$route.params.contactId
     console.log('id1', contactId)
     this.$store.dispatch({ type:"ContactsModule/loadContact", contactId})
   },
   destroyed(){
     this.$store.commit({type: "ContactsModule/loadContact", currContact:null }) 
   },
   computed: {
     currContact(){
       return this.$store.state.ContactsModule.currContact
     },
     coins (){
       return this.$store.state.UserModule.user.coins
     }
   },
   methods:{
     updateTranction(){
       this.ifNoFunds=false;
       if(this.$store.state.UserModule.user.coins>=this.amount){
         this.ifSuccess=true;
         let txData={
          coins:this.amount,
          transterTo:this.currContact._id,
          direction :"out",
          date:new Date()
       }
       this.$store.dispatch({ type:"UserModule/addTransaction", txData});
       this.lastAmount=this.amount;
       this.amount=null;
       
       } else{
         this.ifNoFunds=true;
         this.ifSuccess=false;
          return this.amount=null;
       }
     }
   }
 }

</script>

<style lang="scss">

</style>
