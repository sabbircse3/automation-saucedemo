const standardUserObjects = require('./standardUserObjects');

class standardUserActions {
    async enterUsername() {
            await standardUserObjects.enterUserName.setValue("standard_user");
        }
        async enterPassword() {
            await standardUserObjects.enterPassword.setValue("secret_sauce");
        }
        async clickLogin() {  
            await standardUserObjects.loginButton.click();
        }
        async clickMenuButton(){
            await standardUserObjects.humbergerButton.click();
        }
        async clicResetButton(){
            await standardUserObjects.clickResetApp.click();
        }
        async addToCart1 (){
            await standardUserObjects.productCart1.click();
        }
        async addToCart2 (){
            await standardUserObjects.productCart2.click();
        }
        async addToCart3(){
            await standardUserObjects.productCart3.click();
        }
        async clickShipping(){
            await standardUserObjects.clickShippingCart.click();
        }
        async clickCheckout(){
            await standardUserObjects.clickCheckout.click();
        }
        async firstName(){
            await standardUserObjects.enterfirstName.setValue("Md Asadul");
        }
        async lastName(){
            await standardUserObjects.enterLastName.setValue("Haque");
        }
        async zipCode(){
            await standardUserObjects.enterZipcode.setValue("6740");
        }
        async countineButton(){
            await standardUserObjects.clickCountine.click();
        }
        async title1(){
            return await standardUserObjects.productTitile1.getText();
        }
        async title2 (){
            return await standardUserObjects.productTitile2.getText();
        }
        async title3(){
            return await standardUserObjects.productTitile3.getText();
        }
        async price1 (){
            return await standardUserObjects.productprice1.getText();
        }
        async price2 (){
            return await standardUserObjects.productprice2.getText();
        }
        async price3 (){
            return await standardUserObjects.productprice3.getText();
        }
        async scrollPage(){
            await browser.execute("window.scrollBy(0, 500);");
            await browser.pause(3000);
        }
        async totalPrice(){
            const price_element = await standardUserObjects.totalPricem.getText();
            return parseFloat(price_element.replace("Item total: $", " "));
        }
        async finishButton(){
            await standardUserObjects.finishButton.click();
        }
        async successbanner (){
            return await standardUserObjects.successOrder.getText();
        }
        async logoutButtion(){
            await standardUserObjects.logoutbutton.click();
        }
}
module.exports = new standardUserActions();