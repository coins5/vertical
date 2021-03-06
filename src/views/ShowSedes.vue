<template>
  <v-container style="padding-bottom: 72px">
    <v-row>
      <v-col>
        <div>
          <v-btn icon @click="goBack">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          Sedes
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table :headers="headers" :items="data">
          <template v-slot:item.actions="{ item }">
            <v-icon @click="editItem(item)" class="mr-2" small >
              mdi-pencil
            </v-icon>
            <v-icon @click="deleteItem(item)" small>
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
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
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="editedItem.nombre" label="Nombre"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="editedItem.distrito"
                  placeholder="Distrito"
                  label="Distrito"
                  :items="districts"
                  solo
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import sedeStore from '../stores/sedeStore'
import { LimaMetropolitana } from '../utils/districts'

export default {
  data: () => ({
    districts: [...LimaMetropolitana.sort()],
    dialog: false,
    headers: [
      {
        text: 'Nombre',
        align: 'start',
        sortable: true,
        value: 'nombre'
      },
      {
        text: 'Distrito',
        align: 'center',
        sortable: true,
        value: 'distrito'
      },
      {
        text: 'Editar',
        align: 'center',
        sortable: false,
        value: 'actions'
      }
    ],
    data: [],
    editedIndex: -1,
    editedItem: {
      nombre: '',
      distrito: ''
    },
    defaultItem: {
      nombre: '',
      distrito: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nueva sede' : 'Editar sede'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  mounted () {
    this.initialize()
  },

  methods: {
    goBack () {
      this.$router.push('/admin')
    },
    newItem () {
      this.dialog = true
    },
    initialize () {
      this.data = sedeStore.getSedes()
    },
    editItem (item) {
      this.editedIndex = this.data.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      const index = this.data.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.data.splice(index, 1)
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.data[this.editedIndex], this.editedItem)
      } else {
        this.data.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
