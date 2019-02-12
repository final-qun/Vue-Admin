import axios from 'axios'
import Qs from 'qs'

axios.defaults.withCredentials = true

const http = axios.create({
    baseURL: 'api',
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    },
    paramsSerializer: (params) => {
        return Qs.stringify(params, {indices: true})
    }
})

export const api = {
    fetch: (path, params) => http.get(path, {params}).then(res => res.data),
    post: (path, data, params) => http.post(path, data,{params}).then(res => res.data),
    download: (url, method, data, params) => http.request({url, method, data, params, responseType: 'blob'})
}