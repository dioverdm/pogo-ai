const { makeRequest } = require('./request');

class PogoAI {
    constructor(apiKey, apiUrl = 'http://de01.uniplex.xyz:5206/') {
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }

    _getModelVersion(modelName) {
        switch (modelName.toLowerCase()) {
            case 'pia-star':
                return 'v1';
            case 'pia-stellar':
                return 'v2';
            default:
                console.warn(`Modelo "${modelName}" no reconocido. Usando 'v1' por defecto.`);
                return 'v1';
        }
    }

    async generateText(prompt, modelName = 'pia-star') {
        const modelVersion = this._getModelVersion(modelName);
        try {
            const response = await makeRequest(`${this.apiUrl}${modelVersion}`, 'POST', { prompt }, {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            });
            if (!response || !response.response) {
                throw new Error("Respuesta inválida de la API");
            }
            return response.response;
        } catch (error) {
            console.error('Error al generar texto:', error);
            throw error;
        }
    }
}

module.exports = PogoAI;