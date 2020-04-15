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
            localStorage.setItem('access-token', data.accessToken)
            localStorage.setItem('refresh-token', data.refreshToken)
            localStorage.setItem('user', JSON.stringify(data.user))
            commit('SET_AUTH', true)
            commit('$SET_USER', data.user)
            commit('SET_VALIDATION', null)
            if(data.user.verified){
                router.push('/profile')
            }else{
                router.push('/email-resend')
            }  
        },

        async logout({commit}){
            localStorage.removeItem('access-token')
            localStorage.removeItem('refresh-token')
            localStorage.removeItem('user')
            commit('SET_AUTH', false)
            commit('$SET_USER', null)
            router.push('/')
        },

        async updateEmail({commit}, updateInfo){
            const { user, email } = updateInfo
            await http.patch(`/email`, { email:user.email, oldEmail: email })
            commit('SET_VALIDATION', null)
            router.push({
                name: 'EmailResend',
                params: {
                    email: user.email
                }
            })
        },

        async resendActivationEmail(_, email){
            await http.post(`/email`, { email })
        },

        async authorize(_, query){
            const { data } = await http.post('/authorize', query)
            router.push(data.url)
        },
    },

}