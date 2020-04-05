<template>
  <v-container>
    <v-row>
      <v-col>
        <div>
          <v-btn icon @click="goBack">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          {{isNewItem ? 'Nuevo alumno' : 'Editar alumno'}}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card elevation="12">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Nombre"
                    v-model="data.nombre"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Apellidos"
                    v-model="data.apellidos"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Direccion"
                    :value="isNewItem ? '' : 'direccion'"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    v-model="selectedDistrict"
                    placeholder="Distrito"
                    label="Distrito"
                    :items="districts"
                    solo
                  />
                </v-col>

                <v-col cols="12" sm="6">
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select
                      :items="['DNI', 'PASAPORTE']"
                      label="Tipo de documento"
                      v-model="selectedTipoDocumento"
                      solo
                    ></v-select>
                  </v-col>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Numero de documento"
                    v-model="data.nroDocumento"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-menu
                    v-model="datePickerNacimiento"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="data.fechaNacimiento"
                        label="Fecha de nacimiento"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="data.fechaNacimiento" @input="datePickerNacimiento = false"></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-menu
                    v-model="datePickerInicio"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="fechaInicio"
                        label="Fecha de nacimiento"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="fechaInicio" @input="datePickerInicio = false"></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="6" sm="3">
                  <v-text-field
                    label="Talla (cm)"
                    value="175"
                  ></v-text-field>
                </v-col>
                <v-col cols="6" sm="3">
                  <v-text-field
                    label="Peso (kg)"
                    value="175"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['Femenino', 'Masculino', 'Si por favor']"
                    label="Sexo"
                    v-model="selectedSexo"
                    solo
                  ></v-select>
                </v-col>

                <v-col cols="12">
                  Servicios
                  <br />
                  <v-checkbox
                    v-model="serviceEscaladaSelected"
                    label="Academia de escalada"
                  ></v-checkbox>
                  <v-checkbox
                    v-model="serviceEntrenamientoSelected"
                    label="Entrenamiento para montñismo"
                  ></v-checkbox>
                </v-col>

              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="cancel()">
              Cancelar
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="save()">
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import alumnoStore from '../stores/alumnoStore'
import moment from 'moment'
import { LimaMetropolitana } from '../utils/districts'

export default {
  mounted () {
    const id = this.$route.params.id
    if (id) {
      this.data = alumnoStore.getAlumno(id)
      this.selectedDistrict = 'Barranco'
      this.selectedTipoDocumento = 'DNI'
    }
  },
  computed: {
    isNewItem () {
      return this.$route.params.id === undefined
    }
  },
  methods: {
    cancel () {
      this.$router.push('/showAlumnos')
    },
    save () {
      this.$router.push('/showAlumnos')
    },
    goBack () {
      this.$router.push('/showAlumnos')
    }
  },
  data () {
    return {
      data: {},
      selectedDistrict: '',
      selectedTipoDocumento: 'DNI',
      selectedSexo: 'Femenino',
      datePickerNacimiento: false,
      datePickerInicio: false,
      fechaInicio: moment().format('YYYY-MM-DD'),
      districts: [...LimaMetropolitana.sort()],
      serviceEscaladaSelected: false,
      serviceEntrenamientoSelected: true
    }
  }
}
</script>
