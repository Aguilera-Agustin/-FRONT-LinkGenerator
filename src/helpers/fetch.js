import axios from 'axios';
import btoa from 'btoa';
import download from 'downloadjs'

const getAuth = () =>{
    const username = process.env.REACT_APP_API_USERNAME
    const password = process.env.REACT_APP_API_PASSWORD
    const tok = username + ':' + password;
    const encryptedAuth = btoa(tok)
    return encryptedAuth
}

export const customAxios = async (endpoint,myData={},method='get' ) => {
    const basePath = process.env.REACT_APP_API_URL
    
    const config = {
    method,
    url: basePath+endpoint,
    headers: { 
        'Authorization': `Basic ${getAuth()}`, 
        'Content-Type': 'application/json'
    },
    data: myData
    };
    const finalData = await axios(config)
    return {
        status : finalData.status,
        data: finalData.data.msg
    }

}

export const getPdf = (id, setLoading) => {
    setLoading(true)
    const data = JSON.stringify({
        "id": id
      });
    const basePath = process.env.REACT_APP_API_URL

    const config = {
    method: 'put',
    url: basePath + 'pay/voucher',
    headers: { 
        'Authorization': `Basic ${getAuth()}`, 
        'Content-Type': 'application/json'
    },
    data,
    responseType: 'blob', 

    };

    axios(config)
    .then(function (response) {
    const content = response.headers['content-type'];
    download(response.data, '[SUPERSISTEMAS]-Comprobante.pdf', content)
    setLoading(false)
    })
    .catch(function (error) {
    console.log(error);
    });
}

export const sendImage = async (id, data) => {
    const formData = new FormData();
    for (let index = 0; index < data.length; index++) {
        formData.append('img', data[index]);
        
    }
    formData.append('id', id)
    const basepath = process.env.REACT_APP_API_URL
    const newData = await axios.put(basepath+'pay/buyInProcess', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Basic ${getAuth()}`
          }
    })
   return newData
}