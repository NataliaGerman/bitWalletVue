<template>
  <div>
    <form class="form-login" @submit.prevent="onLogin">
        <div class="form-group">
          <label >User Name</label>
          <input type="text" class="form-group" v-model="user.name">
        </div>  
        <div class="form-group">
          <label >Password</label>
          <input class="form-group" type="password" v-model="user.pass">
        </div>
        <button class="form-group button" type="submit">Login</button>
    </form> 
  </div>
</template>

<script>
// import UserService from '../services/UserService.js'

export default {
  name : 'loginForm',
  data(){
    return{
     user: {
        name: '',
        pass: ''
      },
    }
  },
  methods:{
      onLogin(){
       this.$store.dispatch({type: 'UserModule/doLogin', user:this.user})
       .then (user=>{
        if(!user){ this.faledLogin=true}
      })
    }
  }
  
}
</script>

<style lang="scss">
.form-login{
  margin: 20px
}
.form-group {
  padding-bottom:15px;
}
.form-login label{
  display:block
}
.form-login input {
  padding:8px;
  width:30%
}
.form-login button{
  background-color: #333;
  color:#fff;
  padding:10px 15px;
  border:none;
}
.button:hover {
background: grey;
color:#fff;
}


</style>
