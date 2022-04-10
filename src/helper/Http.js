import axios from "axios";

import apis from "./Apis";

const postWithToken = async (endPoint, body) => {
   const token = localStorage.getItem("token");
   const postConfig = {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   };
   return axios.post(`${apis.baseUrl}${endPoint}`, body, postConfig);
};

const http = async (endPoint, body) => {
   return axios.post(`${apis.baseUrl}${endPoint}`, body);
};

const httpGet = async (endPoint) => {
   return axios.get(`${apis.baseUrl}${endPoint}`);
};

export { postWithToken, http, httpGet };
