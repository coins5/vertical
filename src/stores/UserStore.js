// proceso falso para simular que hacemos una peticion http
const pretendHttp = () => {
  return new Promise(resolve => {
    window.setTimeout(() => {
      resolve(true)
    }, 500)
  }, eject => {
    window.setTimeout(() => {
      eject(false)
    }, 500)
  })
}

export default {
  async login (user, pass, userType) {
    await pretendHttp()
    return {
      name: user,
      userType: userType
    }
  }
}
