import axios from "axios";

var barbeirosService = {

    getBarbeiro: async()=>{
        var barbeirosApi = axios.get(`http://localhost:5000/api/funcionarios/barbeiro`);
        return await barbeirosApi;


    }
    



}

export default barbeirosService;