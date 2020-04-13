import http from './../../plugins/http'

export default {
    state: {
      $user: JSON.parse(localStorage.getItem('user')),
      users: null
    },
    getters: {
      $user: (state) => state.$user ? state.$user : {},
      users: (state) => state.users ? state.users : [],
    },
    mutations: {
      $SET_USER: (state, user) => state.$user = user,
      SET_USERS: (state, users) => state.users = users,
      ADD_USER: (state, user) => state.users.push(user),
      DEL_USER: (state, user) => state.users = state.users.filter(el => el.id != user.id)
    },
    actions: {
       getUsers: async ({commit}) => {
          const { data } = await http.get('/users')
          commit('SET_USERS', data)
       },

       deleteUser: async ({commit}, user) => {
          await http.delete(`/users/${user.id}`)
          commit('DEL_USER', user)
      }
    },
  }