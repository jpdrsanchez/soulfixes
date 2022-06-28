import axios from 'axios'

const api = axios.create({
  baseURL: 'https://soulfixes.nh20.nowebdns.com.br'
})

export default api
