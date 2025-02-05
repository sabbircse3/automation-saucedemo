const performanceGlitchUserObjects = require("../pages/question-3/performanceGlitchUserObjects");

class performanceGlitchUserActions{
       async enterUsername() {
            await performanceGlitchUserObjects.enterUserName.setValue("performance_glitch_user");
            await browser.pause(3000);
        }
        async enterPassword() {
            await performanceGlitchUserObjects.enterPassword.setValue("secret_sauce");
            await browser.pause(3000);
        }
        async clickLogin() {  
            await performanceGlitchUserObjects.loginButton.click();
            await browser.pause(3000);
        }
        async clickMenuButton(){
            await performanceGlitchUserObjects.humbergerButton.click();
            await browser.pause(3000);
        }
        async clicResetButton(){
            await performanceGlitchUserObjects.clickResetApp.click();
            await browser.pause(3000);
        }
        async filterbutton(){
            await performanceGlitchUserObjects.filterProduct.click();
            await browser.pause(3000);
        }
        async addCart(){
            await performanceGlitchUserObjects.addCartProduct.click();
            await browser.pause(3000);
        }
        async clickShipping(){
            await performanceGlitchUserObjects.clickShippingCart.click();
            await browser.pause(3000);
        }
        async clickCheckout(){
            await performanceGlitchUserObjects.clickCheckout.click();
            await browser.pause(3000);
        }
        async firstName(){
            await performanceGlitchUserObjects.enterfirstName.setValue("Sabbir");
        }
        async lastName(){
            await performanceGlitchUserObjects.enterLastName.setValue("Hasan");
        }
        async zipCode(){
            await performanceGlitchUserObjects.enterZipcode.setValue("6700");
        }
        async countineButton(){
            await performanceGlitchUserObjects.clickCountine.click()
            await browser.pause(3000);
        }
        async title(){
            return await performanceGlitchUserObjects.productTitle.getText();
        }
        async productprice(){
            const productP = await performanceGlitchUserObjects.productPrice.getText();
            return parseFloat(productP.replace("$", " "));
        }
        async totalPrice(){
            const priceNumer = await performanceGlitchUserObjects.totalprice.getText();
            return parseFloat(priceNumer.replace("Item total: $", " "));
        }
        async finishButton(){
            await performanceGlitchUserObjects.finishButton.click();
        }
        async successbanner (){
            return await performanceGlitchUserObjects.successOrder.getText();
        }
        async logoutButtion(){
            await performanceGlitchUserObjects.logoutbutton.click();
        }
    }
module.exports = new performanceGlitchUserActions();