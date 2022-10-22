import axios from 'axios';
axios.interceptors.response.use(null, (error) => {
  let status = error.response ? error.response.status : 0;
  if (status === 401 || status === 403) {
  }
  return Promise.reject(error);
});
axios.interceptors.request.use((config) => {
  if (window.location.pathname === 'profile') {
    config.headers['Authorization'] = localStorage.getItem('token') || '';
  }

  return config;
});

class ApiService {
  constructor(path) {
    // eslint-disable-next-line no-undef
    this.baseUrl = process.env.REACT_APP_BASE_URL;
    this.fullPath = `${this.baseUrl}${path}`;
    console.log('url is ', this.baseUrl);
  }

  /**
   *
   * @param {string} path
   * @param {any} params
   * @param {import('axios').AxiosRequestConfig} config
   * @returns
   */
  get = (path = '', params = {}, config) => {
    let fullPath =
      path && path !== '' ? `${this.fullPath}${path}` : this.fullPath;
    return axios.get(fullPath, { params: params }, config);
  };

  post = (data) => {
    return axios.post(this.fullPath, data);
  };
  put = (id, data) => {
    return axios.put(`${this.fullPath}/${id}`, data);
  };

  delete = (id) => {
    return axios.delete(`${this.fullPath}/${id}`);
  };
  /**
   *
   * @param {FormData} data
   * @returns
   */
  upload = (data) => {
    return axios.post(this.fullPath, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  };
}
export default ApiService;
