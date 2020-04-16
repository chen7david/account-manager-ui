import http from './../../plugins/http'
import router from './../../router'

export default {
    state: {
        account: {},
        hasToken: localStorage.getItem('access-token') !== null
    },

    getters: {
        account: (state) => state.account,
        isAuth: (state) => state.hasToken,
    },

    mutations: {
        SET_AUTH: (state, hasToken) => state.hasToken = hasToken
    },

    actions: {
        async login({commit}, authInfo){
            const { data } = await http.post('/login', authInfo)
            commit('SET_AUTH', true)
            commit('$SET_USER', data.user) 
        },

        async logout({commit}){
            localStorage.removeItem('access-token')
            localStorage.removeItem('refresh-token')
            localStorage.removeItem('user')
            commit('SET_AUTH', false)
            commit('$SET_USER', null)
            router.push('/')
        },

        async updateEmail(_, updateInfo){
            const { user, email } = updateInfo
            await http.patch(`/account-email`, { email:user.email, oldEmail: email })
            router.push({
                name: 'EmailResend',
                params: {
                    email: user.email
                }
            })
        },

        async resendActivationEmail(_, email){
            await http.post(`/account-email`, { email })
        },

        async accountVerification({commit}, code){
            const {data} = await http.post(`/account-verification`, { code })
            commit('SET_AUTH', true)
            commit('$SET_USER', data.user) 
        },

        async sendPasswordRevoceryEmail(_, username){
            await http.post(`/account-password`, { username })
        },

        async revocerPassword({commit}, user){
            const {data} = await http.patch(`/account-password`, user)
            commit('SET_AUTH', true)
            commit('$SET_USER', data.user) 
        },

        async authorize(_, query){
            const { data } = await http.post('/authorize', query)
            router.push(data.url)
        },
    },

}