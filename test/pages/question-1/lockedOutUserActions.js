const lockedOutUserObjects = require('./lockedOutUserObjects');

class lockedOutUserActions {
    async enterUserName(){
        await lockedOutUserObjects.enterUderName.setValue("locked_out_user");
    }
    async enterPassword(){
        await lockedOutUserObjects.password.setValue("secret_sauce");
    }
    async clickLoginButton(){
        lockedOutUserObjects.loginButton.click();
    }
    async getErrorMessage(){
        return lockedOutUserObjects.errorMeassage.getText();
    }
}

module.exports = new lockedOutUserActions();