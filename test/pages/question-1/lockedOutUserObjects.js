class lockedOutUserObjects {
    get enterUderName(){
        return $('//input[@id="user-name"]');
    }
    get password(){
        return $('//input[@id="password"]');
    }
    get loginButton(){
        return $('//input[@id="login-button"]');
    }
    get errorMeassage(){
        return $('//div[@class="error-message-container error"]');
    }
}
module.exports = new lockedOutUserObjects();