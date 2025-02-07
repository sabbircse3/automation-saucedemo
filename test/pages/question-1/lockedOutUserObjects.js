class lockedOutUserObjects {
   get enterUserName() { 
        return $('//input[@id="user-name"]'); 
    } 
    get enterPassword() { 
        return $('//input[@id="password"]');
    }
    get clickLoginButton() { 
        return $('//input[@id="login-button"]');
    }
    get errorMessages(){ 
        return $ ('//div[@class="error-message-container error"]');
    }
}
module.exports = new lockedOutUserObjects();