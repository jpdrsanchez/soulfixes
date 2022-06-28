import axios from 'axios'

const api = axios.create({
  baseURL: 'https://soulfixes.nh20.nowebdns.com.br',
  headers: { 'Content-Type': 'application/json' }
})

export default api
