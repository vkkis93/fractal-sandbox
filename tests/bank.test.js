const bank = require('../functions/bank/index');

describe('Bank Accounts', () => {

    it("it should throw error because of missed token", async () => {
        try {
            const result = await bank.getBankAccounts({bankId: 'ada'});
            expect(result.statusCode).toEqual(403)
        } catch (e) {
            expect(e).toBeNull()
        }
    });


    it("it should throw error because of bad bank id", async () => {
        try {
            const result = await bank.getBankAccounts({bankId: 'ada', token: '121'});
            expect(result.statusCode).toEqual(403)
        } catch (e) {
            expect(e).toBeNull()
        }
    });

    it("it should return list of bank accounts", async () => {
        try {
            const result = await bank.getBankAccounts({token: '121', bankId: 1});
            const body = JSON.parse(result.body);
            expect(body.results).toHaveLength(3);
        } catch (e) {
            expect(e).toBeNull()
        }
    });
})
describe('Bank Accounts', () => {

    it("it should throw error because of missed token", async () => {
        try {
            const result = await bank.getBankTransactions({bankId: 1, accountId: 1, companyId: 1});
            expect(result.statusCode).toEqual(403)
        } catch (e) {
            expect(e).toBeNull()
        }
    });

    it("it should return list of bank transcations", async () => {
        try {
            const result = await bank.getBankTransactions({token: '121', bankId: 1, accountId: 1, companyId: 1});
            const body = JSON.parse(result.body);
            expect(body.results).toHaveLength(2);
        } catch (e) {
            expect(e).toBeNull()
        }
    });
})


