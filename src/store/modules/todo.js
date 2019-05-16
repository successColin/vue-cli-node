const todo = {
  state: {
    name: [],
    success: [],
    contentState: false
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    Add_Num: (state, val) => {
      state.code += val
    },
    Cut_Num: (state, val) => {
      state.code -= val
    },
    Add_Name: (state, val) => {
      state.name.push(val)
    },
    Cut_Name: (state, index) => {
      state.name.splice(index, 1)
    },
    Add_Success: (state, item) => {
      state.success.push(item)
    },
    Cut_Success: (state, index) => {
      state.success.splice(index, 1)
    }
  },

  getters: {
    nameLength: state => {
      return state.name.length + 1
    }
  }
}

export default todo
