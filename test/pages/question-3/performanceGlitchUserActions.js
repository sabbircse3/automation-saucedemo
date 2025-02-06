// const performanceGlitchUserObjects = require("../pages/question-3/performanceGlitchUserActions.js");

const performanceGlitchUserObjects = require("./performanceGlitchUserObjects");

class performanceGlitchUserActions{
       async enterUsername() {
            await performanceGlitchUserObjects.enterUserName.setValue("performance_glitch_user");
            await browser.pause(5000);
        }
        async enterPassword() {
            await performanceGlitchUserObjects.enterPassword.setValue("secret_sauce");
            await browser.pause(5000);
        }
        async clickLogin() {  
            await performanceGlitchUserObjects.loginButton.click();
            await browser.pause(5000);
        }
        async clickMenuButton(){
            await performanceGlitchUserObjects.humbergerButton.click();
            await browser.pause(5000);
        }
        async clicResetButton(){
            await performanceGlitchUserObjects.clickResetApp.click();
            await browser.pause(5000);
        }
        async filterbutton(){
            await performanceGlitchUserObjects.filterProduct.click();
            await browser.pause(5000);
        }
        async addCart(){
            await performanceGlitchUserObjects.addCartProduct.click();
            await browser.pause(5000);
        }
        async clickShipping(){
            await performanceGlitchUserObjects.clickShippingCart.click();
            await browser.pause(5000);
        }
        async clickCheckout(){
            await performanceGlitchUserObjects.clickCheckout.click();
            await browser.pause(5000);
        }
        async firstName(){
            await performanceGlitchUserObjects.enterfirstName.setValue("Sabbir");
            await browser.pause(5000);
        }
        async lastName(){
            await performanceGlitchUserObjects.enterLastName.setValue("Hasan");
            await browser.pause(5000);
        }
        async zipCode(){
            await performanceGlitchUserObjects.enterZipcode.setValue("6700");
            await browser.pause(5000);
        }
        async countineButton(){
            await performanceGlitchUserObjects.clickCountine.click()
            await browser.pause(5000);
        }
        async title(){
            await browser.pause(5000);
            return await performanceGlitchUserObjects.productTitle.getText();
        }
        async productprice(){
            await browser.pause(5000);
            const productP = await performanceGlitchUserObjects.productPrice.getText();
            return parseFloat(productP.replace("$", " "));
        }
        async totalPrice(){
            await browser.pause(5000);
            const priceNumer = await performanceGlitchUserObjects.totalprice.getText();
            return parseFloat(priceNumer.replace("Item total: $", " "));
        }
        async finishButton(){
            await performanceGlitchUserObjects.finishButton.click();
            await browser.pause(5000);
        }
        async successbanner (){
            await browser.pause(5000);
            return await performanceGlitchUserObjects.successOrder.getText();
        }
        async logoutButtion(){
            await performanceGlitchUserObjects.logoutbutton.click();
            await browser.pause(5000);
        }
    }
module.exports = new performanceGlitchUserActions();