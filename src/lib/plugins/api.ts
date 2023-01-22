import axios from "axios";

const axiosAPI = axios.create({
  baseURL : import.meta.env.VITE_API_URL
});

const apiRequest = (method: string, url: string, request: any) => {
    const headers = {
        Accept: 'application/json',
		    'Content-Type': 'application/json'
    };
    return axiosAPI({
        method,
        url,
        data: request ? request : null,
        headers
      }).then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
};

const get = (url: string, request: any = null) => apiRequest("get", url, request);

const deleteRequest = (url: string, request: any) => apiRequest("delete", url, request);

const post = (url: string, request: any) => apiRequest("post", url, request);

const put = (url: string, request: any) => apiRequest("put", url, request);

const patch = (url: string, request: any) => apiRequest("patch", url, request);

const API ={
    get,
    delete: deleteRequest,
    post,
    put,
    patch
};
export default API;