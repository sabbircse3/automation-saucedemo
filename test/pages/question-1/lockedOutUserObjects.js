class lockedOutUserObjects {
   get enterUserName() { 
        return $('//input[@id="user-name"]'); 
    } 
    get enterPassword() { 
        return $('//input[@id="password"]');
    }
    get loginButton() { 
        return $('//input[@id="login-button"]');
    }
    get errorMeasses(){ 
        return $ ('//div[@class="error-message-container error"]');
    }
}
module.exports = new lockedOutUserObjects();