const lockedOutUserActions = require("../pages/question-1/lockedOutUserActions.js");

describe("Try login with locked_out_user", () => {
    it("login with locked_out_user and secret_sauce", async () => {
        await lockedOutUserActions.enterUsername();
        await lockedOutUserActions.enterPassword();
        await lockedOutUserActions.clickLoginButton();
    });

    it("verify the error message", async () => {
        const userName = await lockedOutUserActions.errorMessages(); 
        // console.log(userName);
        const expectedMessage = 'Epic sadface: Sorry, this user has been locked out.';
        await expect(userName).toContain(expectedMessage);
    });
});