import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 5000
});


export const getData = (url:string) => {
    return axiosInstance.get(url).then(res=>{
        return res.data
    })
}
