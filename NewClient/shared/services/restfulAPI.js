import axios from 'axios'
import Config from '../config'

const Service = {
    makeRequest(params) {
        return axios.post(Config.apiURL + 'request/make', params)
    },
    detailPatient(params) {
        return axios.post(Config.apiURL + 'patient/detail', params);
    },
    updatePatient(params) {
        return axios.post(Config.apiURL + 'patient/update', params);
    },
    uploadFile(params) {
        return axios.post('http://localhost:3005/api/uploadFileWithoutLogin?userUID=2cfeebaf-48c5-4f04-8047-55ae3e680da1&fileType=ProfileImage', params);
    },
    listSite() {
        return axios.get('https://localhost:3005/api/site/list')
    },
    listService() {
        return axios.get('https://localhost:3005/api/service/list')
    },
    listCountry() {
        return axios.get('https://localhost:3005/api/patient/get-listcountry')
    },
    listLanguage() {
        return axios.get('https://localhost:3005/api/language/list')
    },
    CreateAppointment(params) {
        return axios.post('https://localhost:3017/api/appointment/create', params)
    },
    listAppointment(params) {
        return axios.post('https://localhost:3017/api/appointment/list', params)
    }
}

export default Service
