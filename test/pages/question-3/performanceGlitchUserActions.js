const performanceGlitchUserObjects = require("../pages/question-3/performanceGlitchUserObjects");

class performanceGlitchUserActions{
       async enterUsername() {
            await performanceGlitchUserObjects.enterUserName.setValue("performance_glitch_user");
        }
        async enterPassword() {
            await performanceGlitchUserObjects.enterPassword.setValue("secret_sauce");
        }
        async clickLogin() {  
            await performanceGlitchUserObjects.loginButton.click();
        }
        async clickMenuButton(){
            await performanceGlitchUserObjects.humbergerButton.click();
        }
        async clicResetButton(){
            await performanceGlitchUserObjects.clickResetApp.click();
        }
        async filterbutton(){
            await performanceGlitchUserObjects.filterProduct.click();
        }
        async addCart(){
            await performanceGlitchUserObjects.addCartProduct.click();
        }
        async clickShipping(){
            await performanceGlitchUserObjects.clickShippingCart.click();
        }
        async clickCheckout(){
            await performanceGlitchUserObjects.clickCheckout.click();
        }
        async firstName(){
            await performanceGlitchUserObjects.enterfirstName.setValue("Md Asadul");
        }
        async lastName(){
            await performanceGlitchUserObjects.enterLastName.setValue("Haque");
        }
        async zipCode(){
            await performanceGlitchUserObjects.enterZipcode.setValue("6740");
        }
        async countineButton(){
            await performanceGlitchUserObjects.clickCountine.click()
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