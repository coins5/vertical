<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" no-gutters >
      <v-col cols="12" sm="9" md="6">
        <v-card class="elevation-12">
          <v-card-text>
            <div class="text-center">Inicio de sesion</div>
            <div class="text-center">
              <img src="@/assets/logo-vertical-1.png" alt="">
            </div>
            <div class="text-center">
              <v-btn-toggle v-model="userType" tile group>
                <v-btn value="cliente">Cliente</v-btn>
                <v-btn value="instructor">Instructor</v-btn>
                <v-btn value="admin">Admin</v-btn>
              </v-btn-toggle>
            </div>
            <v-form>
              <v-text-field
                id="txtUser"
                label="Usuario"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                :rules="[
                  v => !!v || 'El usuario no puede estar vacío'
                ]"
                required
              />

              <v-text-field
                id="txtPassword"
                label="Contraseña"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                @keypress.enter="login()"
                :rules="[
                  v => !!v || 'La contraseña no puede estar vacía'
                ]"
                required
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn text>Olvidé la contraseña</v-btn>
            <v-spacer />
            <v-btn color="primary" @click="login()">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import userStore from '../stores/UserStore'
export default {
  data () {
    return {
      userType: 'cliente'
    }
  },
  methods: {
    login () {
      const user = document.getElementById('txtUser').value
      const pass = document.getElementById('txtPassword').value
      if (user.trim() !== '' && pass.trim() !== '') {
        userStore.login(user, pass, this.userType)
          .then(response => {
            this.$router.push(`/${this.userType}`)
          })
      }
    }
  }
}
</script>
