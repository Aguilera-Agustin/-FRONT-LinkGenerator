import axios from 'axios';

export const customAxios = async (endpoint,myData,method='get' ) => {
    const basePath = process.env.REACT_APP_API_URL
    const config = {
    method,
    url: basePath+endpoint,
    headers: { 
        'Authorization': 'Basic YWd1c3RpbjphZ3VpbGVyYQ==', 
        'Content-Type': 'application/json'
    },
    data: myData
    };
    const finalData = await axios(config)
    return finalData.data.msg

}