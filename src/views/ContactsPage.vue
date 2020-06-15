<template>
  <div class="about">
    <h1>contacts page</h1>
    <button class="btn-add-contact" @click="toggleOpenNewContactDetails">Add New Contact</button>
    <add-new v-if="isAddContact"></add-new>
    <contacts-filter></contacts-filter>
    <contacts-list
      :contacts="contactsToShow"
      @removeContact="removeContact">
    </contacts-list>
  </div>
</template>

<script>
import ContactsList from '@/components/ContactsList.vue';
import ContactsFilter from '@/components/ContactsFilter.vue';
import AddNew from "@/components/AddNewContact.vue";

export default {
  name: 'contactsPage',
  
  components: {
    ContactsList,
    ContactsFilter,
     AddNew,
  },

  data(){
    return{
      isAddContact:false
    }
  },
  created(){
    if(!this.$store.state.ContactsModule.contacts.length){
      this.$store.dispatch({type: 'ContactsModule/getContacts'})
    }
  },
   computed:{
     contactsToShow(){
       return this.$store.state.ContactsModule.contacts;
     }
     },
     methods: {
       toggleOpenNewContactDetails() {
         this.isAddContact=!this.isAddContact
       },
       removeContact(contact){
         this.$store.dispatch({ type: "ContactsModule/removeContact", contact});
    },
       }
     }

   
     
   
  

</script>
