const company = require('../functions/company/index');

describe('Companies', () => {

    it("it should throw error because of missed token", async () => {
        try {
            expect.assertions(1);

            const result = await company.getCompanies({});
            expect(result.statusCode).toEqual(403)
        } catch (e) {
            expect(e).toBeNull()
        }
    });


    it("it should return list of companies", async () => {
        try {
            expect.assertions(1);
            const result = await company.getCompanies({token:'aaa'});
            const body = JSON.parse(result.body);
            expect(body).toHaveLength(2);
        } catch (e) {
            expect(e).toBeNull()

        }
    });

    it("it should return one company", async () => {
        try {
            const result = await company.getCompany({token: 'br', companyId: 2});
            const body = JSON.parse(result.body);
            expect(body).toMatchObject({
                "website": "https://www.bball.com",
                "industry": "Sport",
                "business_type": "Sport",
                "pitch": "The best basketball brand"
            });
        } catch (e) {
            expect(e).toBeNull()
        }
    });

    it("it should throw error because of bad id", async () => {
        try {
            const result = await company.getCompany({token: 'br', companyId: 'aaaaaaa'});
            expect(result.statusCode).toEqual(403)
        } catch (e) {
            expect(e).toBeNull()
        }

    })
});
