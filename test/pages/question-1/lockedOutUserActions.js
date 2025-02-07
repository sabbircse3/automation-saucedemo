const lockedOutUserObjects = require('./lockedOutUserObjects.js');

class lockedOutUserActions {
    async enterUsername() {
        await lockedOutUserObjects.enterUserName.setValue("locked_out_user");
        // await browser.pause(5000);
    }
    async enterPassword() {
        await lockedOutUserObjects.enterPassword.setValue("secret_sauce");
        // await browser.pause(5000);
    }
    async clickLoginButton() {  
        await lockedOutUserObjects.clickLoginButton.click();
        // await browser.pause(5000);
    }
    async errorMessages(){
        // await browser.pause(5000);
        return await lockedOutUserObjects.errorMessages.getText();
    }
}

module.exports = new lockedOutUserActions();