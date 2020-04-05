<template>
  <v-container>
    <v-row>
      <v-col>
        Admin page
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card @click="showAlumnos">
          <v-card-text class="text-center">
            <v-icon x-large>mdi-account-group</v-icon>
            <br />
            Mis alumnos
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card @click="showInstructores">
          <v-card-text class="text-center">
            <v-icon x-large>mdi-account-group</v-icon>
            <br />
            Mis instructores
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card @click="showSedes">
          <v-card-text class="text-center">
            <v-icon x-large>mdi-home-city-outline</v-icon>
            <br />
            Mis sedes
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-text class="text-center">
            <v-icon x-large>mdi-clipboard-list-outline</v-icon>
            <br />
            Mis test
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    showAlumnos () {
      this.$router.push('/showAlumnos')
    },
    showInstructores () {
      this.$router.push('/showInstructores')
    },
    showSedes () {
      this.$router.push('/showSedes')
    }
  }
}
</script>
