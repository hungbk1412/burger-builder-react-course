import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://react-burger-builder-hung1412.firebaseio.com'
});

export default instance;