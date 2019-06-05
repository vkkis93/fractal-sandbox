'use strict';
const fractal = require('fractalsdk');
const companyApi = fractal.api.createCompanyApi(process.env.API_KEY, process.env.PARTNER_ID);
exports.getCompanies = async(event) => {
    const {token} = event;
    try {
        const result = await companyApi.getCompanies(token);
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.data)
        };
        return response;
    } catch (e) {
        console.log(e);
        const message = e.response ? e.response.data : e.error;
        return {
            statusCode: 403,
            body: JSON.stringify(message)
        };
    }
};


exports.getCompany = async(event) => {
    const {token, companyId} = event;
    try {
        const result = await companyApi.getCompanyById(token, companyId);
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.data)
        };
        return response;
    } catch (e) {
        console.log(e);
        const message = e.response ? e.response.data : e.error;
        return {
            statusCode: 403,
            body: JSON.stringify(message)
        };
    }
};

