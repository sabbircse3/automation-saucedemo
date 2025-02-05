const lockedOutUserObjects = require('./lockedOutUserObjects.js');

class lockedOutUserActions {
    async enterUserName(){
        await lockedOutUserObjects.enterUderName.setValue("locked_out_user");
        await browser.pause(3000);
    }
    async enterPassword(){
        await lockedOutUserObjects.password.setValue("secret_sauce");
        await browser.pause(3000);
    }
    async clickLoginButton(){
        lockedOutUserObjects.loginButton.click();
        await browser.pause(3000);
    }
    async getErrorMessage(){
        return lockedOutUserObjects.errorMeassage.getText();
        //await browser.pause(3000);
    }
}

module.exports = new lockedOutUserActions();