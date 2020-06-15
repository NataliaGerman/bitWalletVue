<template>
  <div>
    <form class="add-new-contact" @submit.prevent="onSaveContact">
          <input required autofocus class type="text" placeholder="name" v-model="contact.name">
          <input required class type="text" placeholder="email" v-model="contact.email">
          <input required class type="text" placeholder="phone" v-model="contact.phone">
          <button class type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default{
  name: "addNew",

  data(){
    return{
      contact:{
        name:'',
        email:'',
        phone:''
      }
    }
  },

  methods:{
    onSaveContact(){
      if(this.contact.name && this.contact.email && this.contact.phone){
       this.$store.dispatch ({ type: 'ContactsModule/addNewContact', newContact: this.contact})}
    }
  }
}

</script>

<style lang="scss">

</style>
