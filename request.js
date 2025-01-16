const axios = require('axios');

async function makeRequest(url, method = 'POST', data = {}, headers = {}) {
    try {
        const response = await axios({
            url,
            method,
            data,
            headers,
            responseType: 'json'
        });
        if (response.status >= 200 && response.status < 300) { 
            return response.data;
        } else {
            throw new Error(`Error de la API - Código de estado: ${response.status}, Datos: ${JSON.stringify(response.data)}`);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        if (error.response) {
            console.error('Datos de la respuesta:', error.response.data);
            console.error('Estado de la respuesta:', error.response.status);
            console.error('Cabeceras de la respuesta:', error.response.headers);
        } else if (error.request) {
            console.error('No se recibió respuesta del servidor');
        } else {
            console.error('Error configurando la solicitud', error);
        }
        throw error;
    }
}

module.exports = { makeRequest };