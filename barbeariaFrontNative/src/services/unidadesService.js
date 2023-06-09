import axios from "axios";

var unidadesService = {

    getUnidades: async()=>{
        var unidadesApi = axios.get(`http://localhost:5000/api/unidades/`);
        return await unidadesApi;


    }
    



}

export default unidadesService;