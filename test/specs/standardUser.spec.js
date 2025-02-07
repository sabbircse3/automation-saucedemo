const standardUserActions = require("../pages/question-2/standardUserActions");

describe("Login with standard_user then hamburger menu Reset App Then Add Any three items to the cart verify all the product's name and the total price", () => {
    it("Login with standard_user", async () => {
        await standardUserActions.enterUsername();
        await standardUserActions.enterPassword();
        await standardUserActions.clickOnLogin();
    });

    it("hamburger menu Reset App State", async () => {
        await standardUserActions.clickOnMenu();
        await standardUserActions.clickOnReset();
    });

    it("Add Any three items to the cart", async () => {
        await standardUserActions.addToCart1();
        await standardUserActions.addToCart2();
        await standardUserActions.addToCart3();
    });

    it("Shipping checkout", async () => {
        await standardUserActions.clickOnShipping();
        await standardUserActions.clickOnCheckout();
    });

    it("Enter personal info", async () =>{
        await standardUserActions.firstName();
        await standardUserActions.lastName();
        await standardUserActions.zipCode();
        await standardUserActions.clickOnCountineButton();
    });

    it ("Verify all the product's name", async () =>{
        const actualtitle1 = await standardUserActions.title1();
        // console.log(actualtitle1);
        const expectTitle1 = 'Sauce Labs Backpack';
        await expect(actualtitle1).toContain(expectTitle1);

        const actualtitle2  = await standardUserActions.title2();
        // console.log(actualtitle2);
        const expectTitle2 =  "Sauce Labs Bike Light";
        await expect(actualtitle2).toContain(expectTitle2);

        const actualtitle3 = await standardUserActions.title3();
        // console.log(actualtitle3);
        const expectTitle3 = "Sauce Labs Bolt T-Shirt";
        await expect(actualtitle3).toContain(expectTitle3);
    });

    it("verify total price", async() =>{
        const actualprice1  = await standardUserActions.price1();
        let stagingValuepice1 = parseFloat(actualprice1.replace("$"," ")); 
        // console.log(stagingValuepice1);
        
        const actualprice2  = await standardUserActions.price2();
        let stagingValuepice2 = parseFloat(actualprice2.replace("$", " ")); 
        // console.log(stagingValuepice2);

        const actualprice3 = await standardUserActions.price3();
        let  stagingValuepice3 = parseFloat(actualprice3.replace("$", " "));
        // console.log(stagingValuepice3);

        const actualTotalprice1 = (stagingValuepice1+ stagingValuepice2 + stagingValuepice3);
        // console.log(actualTotalprice1);

        await standardUserActions.scrollPage();

        const expectPrice = await standardUserActions.totalPrice();
        // console.log(expectPrice);
        await expect(actualTotalprice1).toBeCloseTo(expectPrice);
    });

    it("Checkout", async () => {
        await standardUserActions.finishButton();
        const successOrderB= await standardUserActions.successbanner()
        console.log(successOrderB);
        await expect(successOrderB).toContain('Thank you for your order!');
    });

    it ("logout from the webstie", async ()=>{
        await standardUserActions.clickOnMenu();
        await standardUserActions.logoutButton();
    })
});
    
