import Cookies from 'js-cookie'
import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

export const $axios = axios.create({
    baseUrl: API_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.getItem('red')}`
    }
})

