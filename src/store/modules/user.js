const user = {
  state: {
    token: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  }
}

export default user
