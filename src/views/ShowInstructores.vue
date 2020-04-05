<template>
  <v-container>
    <v-row>
      <v-col>
        <div>
          <v-btn icon @click="goBack">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          Instructores
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Instructores
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="data"
            :search="search"
          >
            <template v-slot:item.serviceEscalada="{ item }">
              <v-simple-checkbox v-model="item.serviceEscalada" disabled></v-simple-checkbox>
            </template>
            <template v-slot:item.serviceEntrenamiento="{ item }">
              <v-simple-checkbox v-model="item.serviceEntrenamiento" disabled></v-simple-checkbox>
            </template>
            <template v-slot:item.serviceEntrenamiento="{ item }">
              <v-simple-checkbox v-model="item.serviceEntrenamiento" disabled></v-simple-checkbox>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon @click="editItem(item)" small>
                mdi-pencil
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-fab-transition>
      <v-btn
        color="primary"
        @click="newItem"
        fixed
        bottom
        right
        fab
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>
import instructorStore from '../stores/InstructorStore'
export default {
  mounted () {
    this.data = instructorStore.getInstructores()
  },
  methods: {
    editItem (alumno) {
      this.$router.push(`/showInstructor/${alumno.id}`)
    },
    newItem () {
      this.$router.push('/showInstructor')
    },
    goBack () {
      this.$router.push('/admin')
    }
  },
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'Nombre y Apellido',
          align: 'start',
          sortable: true,
          value: 'nombreApellidos'
        },
        {
          text: 'Nro. Documento',
          align: 'center',
          sortable: true,
          value: 'nroDocumento'
        },
        {
          text: 'Fecha Nacimiento',
          align: 'center',
          sortable: true,
          value: 'fechaNacimiento'
        },
        {
          text: 'Entrenamiento',
          align: 'center',
          sortable: true,
          value: 'serviceEscalada'
        },
        {
          text: 'Escalada',
          align: 'center',
          sortable: true,
          value: 'serviceEntrenamiento'
        },
        {
          text: 'Editar',
          align: 'center',
          sortable: false,
          value: 'actions'
        }
      ],
      data: []
    }
  }
}
</script>
