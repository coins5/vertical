const data = [
  {
    id: 'i1',
    nombreApellidos: 'Patty ABC',
    nombre: 'Patty',
    apellidos: 'ABC',
    nroDocumento: '12345678',
    fechaNacimiento: '1993-09-04',
    serviceEscalada: true,
    serviceEntrenamiento: false
  },
  {
    id: 'i2',
    nombreApellidos: 'David Castro',
    nombre: 'David',
    apellidos: 'Castro',
    nroDocumento: '22345678',
    fechaNacimiento: '1975-04-06',
    serviceEscalada: true,
    serviceEntrenamiento: false
  },
  {
    id: 'i3',
    nombreApellidos: 'Jose GHI',
    nombre: 'Jose',
    apellidos: 'GHI',
    nroDocumento: '32345678',
    fechaNacimiento: '1980-04-04',
    serviceEscalada: false,
    serviceEntrenamiento: true
  }
]

export default {
  getInstructores () {
    return [...data]
  },
  getInstructor (id) {
    return { ...data.find(d => d.id === id) }
  }
}
