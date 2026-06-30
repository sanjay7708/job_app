import axios from 'axios'
const api=axios.create({
    baseURL:"http://65.2.166.232:8005/",
    withCredentials:true
})

export default api