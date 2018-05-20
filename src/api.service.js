const api = () => {
    return axios.create({
      baseURL: '',
      timeout: 2000
      // headers: { "X-Requested-With": "XMLHttpRequest" }
    })
};


export default api