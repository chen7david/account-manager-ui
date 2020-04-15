import axios from 'axios'
import store from '../store'
import router from '../router'

const http = axios.create({
    // baseURL: 'http://192.168.50.149:4000',
    baseURL: 'http://192.168.50.124:4000',
    timeout: 6000
})

http.interceptors.request.use((config) => {
    config.url = encodeURI(config.url)
    let accessToken = localStorage.getItem('access-token')
    if(accessToken != null) config.headers.Authorization = `Bearer ${accessToken}`;
    return config
}, (error) => {
    console.log({'req-error': error})
    return Promise.reject(error)
})

http.interceptors.response.use((response) => {
    const {isCargo, payload, details } = response.data
    if(isCargo) {
        console.log(response.data)
        response.data = payload
        if(details && details.state !== 'validation')
            store.dispatch('setSnackbar', details)
    }
    return response
}, (error) => {
    const { isCargo, details, directives, payload } = error.response.data
    if(isCargo) {
        if(details.state == 'validation'){
            store.dispatch('setValidation', details)
        }else{
            store.dispatch('setSnackbar', details)
        }
        console.log(details)
        if(directives){
            for(let directive of directives){
                if(directive == 'verify-email'){
                    router.push({
                        name: 'EmailResend',
                        params: {
                            email: payload.email
                        }
                    })
                }

                if(directive == 'login'){
                    router.push('/login')
                }
            }
        }
    }
    return Promise.reject(error)
})

export default http