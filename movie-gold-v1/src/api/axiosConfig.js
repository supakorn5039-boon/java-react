import axios from 'axios';

export default axios.create({
    baseURL: 'https://9d4f-58-10-43-60.ngrok-free.app',
    headers: { "ngrok-skip-browser-warning": "true" }
});