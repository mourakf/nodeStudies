const { default: axios } = require("axios")


const api = axios.create({
    baseURL: "https://catfact.ninja/",
    method: 'GET',
    data: {
    
}, 
})

api.get('/fact').then(res => console.log(res.data.fact))