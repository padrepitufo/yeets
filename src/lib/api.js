
import axios from "axios";
const yeetsAPI = axios.create({
    baseURL : "https://api.kube.watch"
});
const apiRequest = (method, url, request) => {
    console.log("api requstot");
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

const api = (method, url, request = undefined) => {
    console.log("api requstotaa");
    return fetch(`https://api.kube.watch${url}`, {
        method: method.toUpperCase(),
        body: request ? JSON.stringify(request) : undefined,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return Promise.resolve(res.json());
    })
    .catch(err => {
        return Promise.reject(err);
    });
}
const get = (url) => api("get", url);
const post = (url, request) => api("post", url, request);
const API ={
    get,
    post,
};
export default API;