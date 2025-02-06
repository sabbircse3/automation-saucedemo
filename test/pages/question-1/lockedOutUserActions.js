const lockedOutUserObjects = require('./lockedOutUserObjects.js');

class lockedOutUserActions {
    async enterUsername() {
        await lockedOutUserObjects.enterUserName.setValue("locked_out_user");
        await browser.pause(5000);
    }
    async enterPassword() {
        await lockedOutUserObjects.enterPassword.setValue("secret_sauce");
        await browser.pause(5000);
    }
    async clickLogin() {  
        await lockedOutUserObjects.loginButton.click();
        await browser.pause(5000);
    }
    async errorMeasses(){
        await browser.pause(5000);
        return await lockedOutUserObjects.errorMeasses.getText();
        
    }
}

module.exports = new lockedOutUserActions();