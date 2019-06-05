'use strict';

const fractal = require('fractalsdk');
const authApi = fractal.api.createAuthApi(process.env.API_KEY, process.env.PARTNER_ID);
let response;
exports.handler = async(event) => {
    try {
        const token = await authApi.getToken();
        response = {
            statusCode: 200,
            body: JSON.stringify(token.data)
        };
    } catch (e) {
        console.log(e);
        const message = e.response ? e.response.data : e.error;
        return {
            statusCode: 403,
            body: JSON.stringify(message)
        };
    }
    return response;
};


