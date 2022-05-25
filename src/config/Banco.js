import axios from 'axios';
import { SERVIDOR_LARAVEL } from './Config'; //.config

const http = axios.create({
    baseURL: SERVIDOR_LARAVEL,
})

export default http;