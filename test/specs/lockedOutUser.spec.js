const lockedOutUserActions = require("../pages/question-1/lockedOutUserActions.js");

describe("Locked Out User", () => {
    it("should login with valid username and valid password", async () => {
        await lockedOutUserActions.enterUsername();
        await lockedOutUserActions.enterPassword();
        await lockedOutUserActions.clickLogin();
    });

    it("verify the error message", async () => {
        const actualName = await lockedOutUserActions.errorMeasses(); 
        console.log(actualName);
        const expectedMessage = 'Epic sadface: Sorry, this user has been locked out.';
        await expect(actualName).toContain(expectedMessage);
    });
});