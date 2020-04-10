export default {
  state: {
    error: null,
    validation: null,
    snackbar: null,
  },
  getters: {
    validate: (state) => (key) => {
      let error = state.validation ? state.validation.messages.filter(el => el.key == key)[0] : null
      error = error ? error : {}
      return error.message
    },
    snackbar: (state) => state.snackbar ? state.snackbar : {},
  },
  mutations: {
    SET_VALIDATION: (state, details) => state.validation = details,
    SET_SNACKBAR: (state, details) => state.snackbar = {
      show: true,
      text: details.message,
      color: details.state || 'dark',
      timeout: details.timeout
    },
  },
  actions: {
    setValidation: ({commit}, details) => commit('SET_VALIDATION', details),
    setSnackbar: ({commit}, details) => commit('SET_SNACKBAR', details)
  },
}