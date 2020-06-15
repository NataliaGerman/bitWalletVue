import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Charts from '../views/ChartsPage.vue'
import ContactDetails from '../views/ContactDetails.vue'
import ContactsPage from '../views/ContactsPage.vue'
import EditContact from '../views/ContactEditPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Charts',
    name: 'Charts',
    component: Charts
  },
  {
    path: '/details/:contactId',
    name: 'ContactDetails',
    component: ContactDetails
  },
  {
    path: '/contacts',
    name: 'ContactsPage',
    component: ContactsPage
  },
  {
    path: '/edit/:contactId',
    name: 'ContactEdit',
    component: EditContact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
