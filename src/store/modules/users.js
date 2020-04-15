import http from './../../plugins/http'
import router from './../../router'

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
      ADD_USER: (state, user) => state.users.unshift(user),
      DEL_USER: (state, user) => state.users = state.users.filter(el => el.id != user.id),
      PATCH_USER: (state, user) => {
        const obj = state.users.find(el => el.id == user.id)
        const index = state.users.indexOf(obj)
        state.users.splice(index, 1, user)
      }
    },
    actions: {
      async createUser({commit}, accountInfo){
          const { data } = await http.post('/users', accountInfo)
          // commit('SET_VALIDATION', null)
          commit('ADD_USER', data)
          router.push('/email-resend')
      },
      async getUsers({commit}){
          const { data } = await http.get('/users')
          commit('SET_USERS', data)
       },

       async patchUser({commit}, user){
            const { data } = await http.patch(`/users/${user.id}`, user)
            commit('PATCH_USER', data)
       },

       async deleteUser({commit}, user){
          await http.delete(`/users/${user.id}`)
          commit('DEL_USER', user)
      }
    },
  }