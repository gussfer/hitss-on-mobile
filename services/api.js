import axios from 'axios';
// servidor local ou heroku
const api = axios.create({
    baseURL: "https://plataforma-hitss.herokuapp.com/"
});
export default api;