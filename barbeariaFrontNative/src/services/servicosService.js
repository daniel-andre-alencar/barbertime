import axios from "axios";

var servicosService = {

    getServico: async()=>{
        var servicosApi = axios.get(`http://localhost:5000/api/servicos/`);
        return await servicosApi;
    }
    



}

export default servicosService;