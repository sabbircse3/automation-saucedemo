const performanceGlitchUserActions = require("../pages/question-3/performanceGlitchUserActions");

describe("Performance Glitch User", () => {
    it("should login with valid username and valid password", async () => {
        await GlichAction.enterUsername();
        await GlichAction.enterPassword();
        await GlichAction.clickLogin();
    });

    it("click on the hamburger menu Reset App State", async () => {
        await GlichAction.clickMenuButton();
        await GlichAction.clicResetButton();
    });

    it("Filter the product Z to A and Add to cart one proudct", async() =>{
        await GlichAction.filterbutton();
        await GlichAction.addCart();

    });
    it("click on the shipping and checkout", async () => {
        await GlichAction.clickShipping();
        await GlichAction.clickCheckout();
    });

    it("Enter the personal information", async () =>{
        await GlichAction.firstName();
        await GlichAction.lastName();
        await GlichAction.zipCode();
        await GlichAction.countineButton();
    });

    it ("Verify the products title", async () =>{
        const actualtitle = await GlichAction.title();
        console.log(actualtitle);
        const expectTitle = 'Test.allTheThings() T-Shirt (Red)';
        await expect(actualtitle).toContain(expectTitle);
    });
    it ("verify the product price with total price", async() => {
        const actualTitile = await GlichAction.title();
        console.log(actualTitile);
        await expect(actualTitile).toContain("Test.allTheThings() T-Shirt (Red)");

        const actualPrice = await GlichAction.productprice();
        console.log(actualPrice);
        const expectedPrice = await GlichAction.totalPrice();
        console.log(expectedPrice);
        await expect(actualPrice).toBeCloseTo(expectedPrice);
    });
    it("finish the checkout", async () => {
        await GlichAction.finishButton();
        const successOrderB= await GlichAction.successbanner()
        console.log(successOrderB);
        await expect(successOrderB).toContain('Thank you for your order!');
    });
    
    it ("click on the humbergar manu and logout the webstie", async ()=>{
        await GlichAction.clickMenuButton();
        await GlichAction.logoutButtion();
    })
});