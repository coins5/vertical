import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#ff5722',
        accent: '#ff9800',
        error: '#f44336',
        warning: '#ffc107',
        info: '#03a9f4',
        success: '#4caf50'
      },
      dark: {
        primary: '#3f51b5',
        secondary: '#ff5722',
        accent: '#ff9800',
        error: '#f44336',
        warning: '#ffc107',
        info: '#03a9f4',
        success: '#4caf50'
      }
    }
  }
})
