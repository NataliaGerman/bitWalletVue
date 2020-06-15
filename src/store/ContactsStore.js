import ContactsService from '../services/ContactService.js'


const ContactsModule = {
  strict: true,
  namespaced: true,
  state: {
    contacts:[],
    currContact:null,
    filterBy:''
    },

  mutations: {
    setContacts(state, payload) {
     state.contacts = payload.contacts;
     },

    addContact (state,{contact}){
      state.contacts.unshift(contact)  
    },
    deleteContact (state, {contactId}){
      const idx = state.contacts.findIndex(contact => {
        return contact._id === contactId
      });
      state.contacts.splice(idx, 1);
     },
     loadContact (state, {contact}){
       state.currContact=contact
     }
  },

  getters: {
  },
  actions: {
    getContacts(context, {filter}){
      return ContactsService.getContacts(filter)
      .then (contacts=> {context.commit({type:'setContacts', contacts})
    })
    },

    addNewContact (context, {newContact}){
      return ContactsService.saveContact(newContact)
      .then (addedContact =>{
        //console.log('cont', addedContact)
        return  context.commit({ type: 'addContact', contact:addedContact })
      })
    },
    removeContact (context,{contact}){
      return ContactsService.deleteContact(contact._id)
      .then(deletedContact=>{
        return  context.commit({ type: 'deleteContact', contact:deletedContact })
      })
    },
    loadContact(context,{contactId}){
      console.log('id', contactId)
      return ContactsService.getContactById(contactId)
      .then (contact=>{ context.commit({type: 'loadContact', contact})})
    }
  }
}

export default ContactsModule;