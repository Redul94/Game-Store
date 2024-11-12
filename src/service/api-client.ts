import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '879f4e2624e8455983b5653c3dbe33a2'
    }
})