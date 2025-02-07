const standardUserObjects = require('./standardUserObjects');

class standardUserActions {
    async enterUsername() {
            await standardUserObjects.enterUserName.setValue("standard_user");
            // await browser.pause(3000);
        }
        async enterPassword() {
            await standardUserObjects.enterPassword.setValue("secret_sauce");
            // await browser.pause(3000);
        }
        async clickOnLogin() {  
            await standardUserObjects.clickOnLogin.click();
            // await browser.pause(3000);
        }
        async clickOnMenu(){
            await standardUserObjects.humbergerButton.click();
            // await browser.pause(3000);
        }
        async clickOnReset(){
            await standardUserObjects.clickOnResetApp.click();
            // await browser.pause(3000);
        }
        async addToCart1 (){
            await standardUserObjects.productCart1.click();
            // await browser.pause(3000);
        }
        async addToCart2 (){
            await standardUserObjects.productCart2.click();
            // await browser.pause(3000);
        }
        async addToCart3(){
            await standardUserObjects.productCart3.click();
            // await browser.pause(3000);
        }
        async clickOnShipping(){
            await standardUserObjects.clickOnShippingCart.click();
            // await browser.pause(3000);
        }
        async clickOnCheckout(){
            await standardUserObjects.clickOnCheckout.click();
            // await browser.pause(3000);
        }
        async firstName(){
            await standardUserObjects.enterfirstName.setValue("Sabbir");
            // await browser.pause(3000);
        }
        async lastName(){
            await standardUserObjects.enterLastName.setValue("Hasan");
            // await browser.pause(3000);
        }
        async zipCode(){
            await standardUserObjects.enterZipcode.setValue("6700");
            // await browser.pause(3000);
        }
        async clickOnCountineButton(){
            await standardUserObjects.clickOnCountine.click();
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
            // await browser.pause(3000);
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
        async logoutButton(){
            await standardUserObjects.logoutbutton.click();
        }
}
module.exports = new standardUserActions();