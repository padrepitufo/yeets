
import axios from "axios";
const yeetsAPI = axios.create({
    baseURL : "https://api.kube.watch"
});
const apiRequest = (method, url, request) => {
    const headers = {
        authorization: ""
    };
    //using the axios instance to perform the request that received from each http method
    return yeetsAPI({
        method,
        url,
        data: request,
        headers
    }).then(res => {
        return Promise.resolve(res.data);
    })
    .catch(err => {
        return Promise.reject(err);
    });
};
const get = (url, request) => apiRequest("get", url,request);
const post = (url, request) => apiRequest("post", url, request);
const API ={
    get,
    post,
};
export default API;