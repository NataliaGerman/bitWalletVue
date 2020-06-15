<template>
  <section class="flex">
    <router-link class="flex" :to="'/details/'+contact._id">
        <div>{{contact.name}}</div>
        <div>{{contact.email}}</div>
        <div>{{contact.phone}}</div>
    </router-link>
    <button @click="emitRemoveContact" title="Delete Contact" >delete</button>
  </section>
</template>

<script>
export default{
  name: "contactPreview",
  props: {
    contact: Object
  },
  methods:{
    emitRemoveContact(){
      this.$emit("onRemoveContact", this.contact)
    }
  }
}
</script>

<style lang="scss">
.flex{
  display: flex;
  justify-content: space-around 
}
</style>
