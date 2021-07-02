import axios from 'axios';

const HostUrl = 'https://localhost:44317/api/';

export const endPoints = {
    Base: 'Responses',
    CovidHistory: 'Responses/GetResponse',
    Summary: 'Responses/GetSummary'
}

export const APIEndPoint = endPoint => {

    let url = HostUrl + endPoint;
    debugger;
    return {
        getSummary: () => axios.get(url),
        getUAECovidbyId: id => axios.get(url + "/" + id),
        createUAECovidEntry: newrecord => axios.post(url, newrecord),
        updateUAECovidEntry: (id, updaterecord) => axios.put(url + "/" + id, updaterecord),
        deleteUAECovidEntry: id => axios.delete(url + "/" + id)
    }
}


