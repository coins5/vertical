const data = [
  {
    id: 's1',
    nombre: 'DeporPlaza',
    distrito: 'Jesús María'
  },
  {
    id: 's2',
    nombre: 'Real Plaza',
    distrito: 'Surquillo'
  },
  {
    id: 's3',
    nombre: 'Camino Real',
    distrito: 'Miraflores'
  }
]

export default {
  getSedes () {
    return [...data]
  },
  getSede (id) {
    return { ...data.find(d => d.id === id) }
  }
}
