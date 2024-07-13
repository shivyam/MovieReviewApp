import axios from 'axios';


export default axios.create({
    baseURL: 'https://4783-69-166-116-18.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
});