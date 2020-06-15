import Vue from 'vue'
import Vuex from 'vuex'


import BitcoinModule from './BitcoinStore'
import UserModule from './UserStore'
import ContactsModule from './ContactsStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    BitcoinModule,
    UserModule,
    ContactsModule
  }
})
