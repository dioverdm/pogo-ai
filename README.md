# Pogo AI

Un cliente JavaScript simple para interactuar con la API PogoAI. Este paquete facilita la generación de texto a partir de prompts.

<img src="https://img.shields.io/npm/v/pogo-ai?style=for-the-badge" alt="NPM Badge"> <img src="https://img.shields.io/npm/l/pogo-ai?style=for-the-badge" alt="License Badge"> <img src="https://img.shields.io/npm/d18m/pogo-ai.svg?style=for-the-badge" alt="Download Badge">

## Instalación

Para instalar `pogo-ai`, usa npm:

```bash
npm i pogo-ai
```

## Uso

Este paquete exporta una clase `PogoAI`. Para usarla, necesitas una clave de API. Obtén tu clave de API desde [aquí](https://pogoai.com).

```bash
const PogoAI = require('pogo-ai');
```

### Ejemplo:
```javascript
const PogoAI = require('pogo-ai');

// Reemplaza con tu clave de API
const apiKey = 'SU_API_KEY'; 

const client = new PogoAI(apiKey);

async function generateText(prompt, model = 'pia-star') {
  try {
    const response = await client.generateText(prompt, model);
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Ejemplos de uso:
generateText("Escribe un poema sobre un gato.");
generateText("Resume este texto: ...[inserta texto a resumir]...", 'pia-stellar'); 
```

## Métodos

### `PogoAI.generateText(prompt, model)`

Genera texto utilizando la API PogoAI.

* *`prompt` (string, requerido):* El prompt o instrucción de texto para generar la respuesta.
* *`model` (string, opcional):* Especifica el modelo a utilizar. Los modelos disponibles son:
    * `pia-star` (modelo por defecto)
    * `pia-stellar`
* *Devuelve:* Una promesa que se resuelve con la respuesta de texto generada por la API, o se rechaza con un error si la solicitud falla.

## Manejo de Errores

El método `generateText` puede lanzar errores debido a problemas de red, claves de API inválidas o errores en la respuesta de la API. Siempre debes usar un bloque `try...catch` para manejar posibles errores:

```javascript
try {
  // ... tu código que llama a generateText ...
} catch (error) {
  console.error("Ocurrió un error:", error);
  // ... Manejo del error ...
}
```

## Consideraciones

* Asegúrate de tener una clave de API válida antes de usar este paquete.
* Puedes consultar la documentación de la API PogoAI para más detalles sobre los modelos y sus capacidades. [docs.pogoai.com](https://docs.pogoai.com)


## Licencia

MIT
