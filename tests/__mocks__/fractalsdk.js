module.exports = {
    api: {
        createAuthApi: () => {
            return {
                getToken: () => Promise.resolve(respToken())
            }
        },
        createCompanyApi: () => {
            return {
                getCompanies: (token) => {
                    if (!token) {
                        throw {
                            "message": "Missing Authentication Token"
                        }
                    }
                    return Promise.resolve(respCompanies());
                },

                getCompanyById: (token, companyId) => {
                    throwErrorBecauseOfBadId(token, companyId);
                    return Promise.resolve(respCompany())
                }
            }
        },
        createBankApi: () => {
            return {
                getAccounts: (token, id) => {
                    throwErrorBecauseOfBadId(token, id);
                    return Promise.resolve(respBankAccounts());
                },
                getAccountTransactions: (token, id) => {

                    throwErrorBecauseOfBadId(token, id);
                    return Promise.resolve(respAccountTransactions());
                }
            }
        }
    }
};


function respToken() {
    return {
        data: {
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYW5kYm94VXNlciIsIm5hbWUiOiJGcmFjQm94IiwiaWF0IjoxNTE2MjM5MDIyLCJleHBpcmVzIjoxODAwfQ.A-Xk_RwJu3BZQ7gsUgq7nK4UPJpqIKJtxbBxkz2eJU4",
            "partner_name": "FracBox",
            "partner": "viktor.kis@techmagic.co",
            "expires": 1800,
            "token_type": "Bearer",
            "permissions": "SANDBOX"
        }
    }
}

function respCompanies() {
    return {
        data:
            [
                {
                    "id": 2,
                    "name": "Pear",
                    "created_at": "2019-01-29T12:04:40.704Z",
                    "year_end_month": 1,
                    "year_end_day": 28,
                    "partner_id": "viktor.kis@techmagic.co",
                    "blocked": false,
                    "registered_address": {
                        "lines": [
                            "London, UK"
                        ]
                    },
                    "website": "https://www.pear.com",
                    "industry": "Computers",
                    "business_type": "Tech",
                    "pitch": "Fruity code"
                },
                {
                    "id": 8,
                    "name": "Botbot",
                    "created_at": "2019-02-29T12:04:40.704Z",
                    "year_end_month": 2,
                    "year_end_day": 27,
                    "partner_id": "viktor.kis@techmagic.co",
                    "blocked": false,
                    "registered_address": {
                        "lines": [
                            "London, UK"
                        ]
                    },
                    "website": "https://www.botbot.com",
                    "industry": "AI",
                    "business_type": "Tech",
                    "pitch": "AI people"
                }
            ]
    }
}


function respCompany() {
    return {
        data:
            {
                "id": 82,
                "name": "Bball",
                "created_at": "2019-03-29T12:04:40.704Z",
                "year_end_month": 4,
                "year_end_day": 7,
                "partner_id": "viktor.kis@techmagic.co",
                "blocked": false,
                "registered_address": {
                    "lines": [
                        "London, UK"
                    ]
                },
                "website": "https://www.bball.com",
                "industry": "Sport",
                "business_type": "Sport",
                "pitch": "The best basketball brand"
            }
    }
}

function respBankAccounts() {
    return {
        data:
            {
                results: [{
                    companyId: 176,
                    bankId: 1111111,
                    currency: 'GBP',
                    AccountId: 'fakeAcc176',
                    Account:
                        {
                            SchemeName: 'IBAN',
                            Identification: 'GB86BANK43215678060961',
                            Name: 'Debit Account',
                            SecondaryIdentification: ''
                        },
                    dateAuthorised: '2018-09-06',
                    revoked: false
                },
                    {
                        companyId: 54,
                        bankId: 1111111,
                        currency: 'GBP',
                        AccountId: 'fakeAcc54',
                        Account:
                            {
                                SchemeName: 'IBAN',
                                Identification: 'GB84BANK43215478060941',
                                Name: 'Debit Account',
                                SecondaryIdentification: ''
                            },
                        dateAuthorised: '2018-09-06',
                        revoked: false
                    },
                    {
                        companyId: 74,
                        bankId: 1111111,
                        currency: 'GBP',
                        AccountId: 'fakeAcc74',
                        Account:
                            {
                                SchemeName: 'IBAN',
                                Identification: 'GB84BANK43215478060941',
                                Name: 'Debit Account',
                                SecondaryIdentification: ''
                            },
                        dateAuthorised: '2018-09-06',
                        revoked: false
                    }]
            }
    }
}

function throwErrorBecauseOfBadId(token, id) {
    if (!token) {
        throw {
            "message": "Missing Authentication Token"
        }
    }
    if (!Number.isInteger(id)) {
        throw ({"error": "Invalid request - Missing bank path"});
    }
}

function respAccountTransactions() {
    return {
        data: {
            results: [
                {
                    "bankId": 1,
                    "accountId": "qqqqqq",
                    "transactionId": "0ef942ea-d3ad-4f25-857b-4d4bb7f912d8",
                    "bookingDate": "2018-07-24",
                    "reference": "",
                    "transactionCode": "",
                    "transactionSubCode": "",
                    "proprietaryCode": "",
                    "proprietarySubCode": "",
                    "description": "Asos",
                    "amount": "1000.0",
                    "currencyCode": "GBP",
                    "type": "DEBIT",
                    "status": "BOOKED",
                    "merchant": {
                        "name": "Starbucks"
                    },
                    "companyId": 2222
                },
                {
                    "bankId": 1,
                    "accountId": "qqqqqq",
                    "transactionId": "25a4d256-094f-4637-bea0-5f82760674b0",
                    "bookingDate": "2017-04-28",
                    "reference": "",
                    "transactionCode": "",
                    "transactionSubCode": "",
                    "proprietaryCode": "",
                    "proprietarySubCode": "",
                    "description": "INT'L 0020481195 AMAZON UK RETAIL A AMAZON.CO.UK",
                    "amount": "23.12",
                    "currencyCode": "GBP",
                    "type": "DEBIT",
                    "status": "BOOKED",
                    "merchant": {
                        "name": "AMAZON UK RETAIL"
                    },
                    "companyId": 2222
                }

            ]
        }
    }
}
