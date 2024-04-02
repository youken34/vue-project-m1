import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizzForm from '@/components/QuizzForm.vue'
import ContactList from '@/components/ContactList.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'
import EditableStyle from '@/components/EditableStyle.vue'
import HookComponent from '@/components/HookComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/quizzform',
      name: 'quizzform',
      component: QuizzForm
    },  {
      path: '/contactlist',
      name: 'contactlist',
      component: ContactList
    },  {
      path: '/registrationform',
      name: 'registrationform',
      component: RegistrationForm
    },
    {
      path: '/editablestyle',
      name: 'editablestyle',
      component: EditableStyle
    },
    {
      path: '/hookcomponent',
      name: 'hookcomponenet',
      component: HookComponent
    },
  ]
})

export default router
