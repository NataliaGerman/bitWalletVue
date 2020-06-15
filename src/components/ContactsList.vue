<template>
  <div class="container-contacts">
       <ul class="contacts-list">
         <li class="contact-item" v-for="contact in contacts" :key="contact._id">
            <contact-preview 
                :contact="contact"
                @onRemoveContact="removeContact">
           </contact-preview>
        </li>
      </ul>
  </div>
</template>

<script>
  import ContactPreview from "@/components/ContactPreview.vue";

  export default {
    name: "contactsList",
    
    props: {
      contacts: Array
      },
    components: {
      ContactPreview,
          },
    methods:{
      removeContact(contact){
        this.$emit("removeContact", contact)
      }
          }
    };
</script>

<style lang="scss">

ul {
  list-style: none;
 }

li {
  margin: 0 auto;
  list-style: none;
  border-radius: 2px;
  text-decoration: none;
  border: 2px solid blue;
   }
</style>
