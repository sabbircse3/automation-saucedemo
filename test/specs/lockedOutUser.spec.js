const lockedOutUserActions = require("../pages/question-1/lockedOutUserActions.js");

describe("Locked Out User", () => {
    it("should show an error message when the user is locked out", async () => {
        await lockedOutUserActions.enterUserName();
        await lockedOutUserActions.enterPassword();
        await lockedOutUserActions.clickLoginButton();
    });

    it("verify the error message", async () => {
        const actualName = await lockedOutUserActions.getErrorMessage(); 
        console.log(actualName);
        const expectedMessage = 'Epic sadface: Sorry, this user has been locked out.';
        await expect(actualName).toContain(expectedMessage);
    });
});