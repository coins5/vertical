import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import Instructor from '../views/Instructor.vue'
// Cliente debe renombrarse a Alumno
import Cliente from '../views/Cliente.vue'
import ShowAlumnos from '../views/ShowAlumnos.vue'
import ShowAlumno from '../views/ShowAlumno.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/instructor',
    name: 'Instructor',
    component: Instructor
  },
  {
    path: '/cliente',
    name: 'Cliente',
    component: Cliente
  },
  {
    path: '/showAlumnos',
    name: 'ShowAlumnos',
    component: ShowAlumnos
  },
  {
    path: '/showAlumno/:id?',
    name: 'ShowAlumno',
    component: ShowAlumno
  }
]

const router = new VueRouter({
  routes
})

export default router
