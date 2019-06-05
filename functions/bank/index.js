'use strict';
const fractal = require('fractalsdk');
const bankApi = fractal.api.createBankApi(process.env.API_KEY, process.env.PARTNER_ID);
exports.getBankAccounts = async(event) => {
    const {token, bankId, companyId} = event;
    try {
        const result = await bankApi.getAccounts(token, bankId, companyId);
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.data)
        };
        return response;
    } catch (e) {
        const message = e.response ? e.response.data : e.error;
        return {
            statusCode: 403,
            body: JSON.stringify(message)
        };
    }

};


exports.getBankTransactions = async(event) => {
    const {token, bankId, accountId, companyId} = event;
    try {
        const result = await bankApi.getAccountTransactions(token, bankId, accountId, companyId);
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.data)
        };
        return response;
    } catch (e) {
        const message = e.response ? e.response.data : e.error;
        return {
            statusCode: 403,
            body: JSON.stringify(message)
        };
    }

};


