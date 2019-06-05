const auth = require('../functions/auth/index');
describe('Get token', () => {
    it("fetches data from unsplash", async () => {
        expect.assertions(1);
        const result = await auth.handler({});

        const body = JSON.parse(result.body);
        expect(body).toEqual({
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYW5kYm94VXNlciIsIm5hbWUiOiJGcmFjQm94IiwiaWF0IjoxNTE2MjM5MDIyLCJleHBpcmVzIjoxODAwfQ.A-Xk_RwJu3BZQ7gsUgq7nK4UPJpqIKJtxbBxkz2eJU4",
            "partner_name": "FracBox",
            "partner": "viktor.kis@techmagic.co",
            "expires": 1800,
            "token_type": "Bearer",
            "permissions": "SANDBOX"
        })
    })
});
