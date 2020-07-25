import axios from 'axios';


const GetCountriesAll = () => {
    return axios.get(`https://restcountries.eu/rest/v2/all`);
}

export {
    GetCountriesAll
}