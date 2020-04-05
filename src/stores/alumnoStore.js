const data = [
  {
    id: 'a1',
    nombreApellidos: 'Molly Portales',
    nombre: 'Molly',
    apellidos: 'Portales',
    nroDocumento: '12345678',
    fechaNacimiento: '1993-09-04',
    serviceEscalada: true,
    serviceEntrenamiento: false
  },
  {
    id: 'a2',
    nombreApellidos: 'Gigi Leon',
    nombre: 'Gigi',
    apellidos: 'Leon',
    nroDocumento: '22345678',
    fechaNacimiento: '1975-04-06',
    serviceEscalada: true,
    serviceEntrenamiento: false
  },
  {
    id: 'a3',
    nombreApellidos: 'Abby Delgado',
    nombre: 'Abby',
    apellidos: 'Delgado',
    nroDocumento: '32345678',
    fechaNacimiento: '1980-04-04',
    serviceEscalada: false,
    serviceEntrenamiento: true
  },
  {
    id: 'a4',
    nombreApellidos: 'Sandy Nuñez',
    nombre: 'Sandy',
    apellidos: 'Nuñez',
    nroDocumento: '42345678',
    fechaNacimiento: '1996-04-15',
    serviceEscalada: true,
    serviceEntrenamiento: false
  }
]

export default {
  getAlumnos () {
    return [...data]
  },
  getAlumno (id) {
    return { ...data.find(d => d.id === id) }
  }
}
