const performanceGlitchUserActions = require("../pages/question-3/performanceGlitchUserActions.js");

describe("Performance Glitch User", () => {
    it("should login with valid username and valid password", async () => {
        await performanceGlitchUserActions.enterUsername();
        await performanceGlitchUserActions.enterPassword();
        await performanceGlitchUserActions.clickLogin();
    });

    it("click on the hamburger menu Reset App State", async () => {
        await performanceGlitchUserActions.clickMenuButton();
        await performanceGlitchUserActions.clicResetButton();
    });

    it("Filter the product Z to A and Add to cart one proudct", async() =>{
        await performanceGlitchUserActions.filterbutton();
        await performanceGlitchUserActions.addCart();
    });
    it("click on the shipping and checkout", async () => {
        await performanceGlitchUserActions.clickShipping();
        await performanceGlitchUserActions.clickCheckout();
    });

    it("Enter the personal information", async () =>{
        await performanceGlitchUserActions.firstName();
        await performanceGlitchUserActions.lastName();
        await performanceGlitchUserActions.zipCode();
        await performanceGlitchUserActions.countineButton();
    });

    it ("Verify the products title", async () =>{
        const actualtitle = await performanceGlitchUserActions.title();
        console.log(actualtitle);
        const expectTitle = 'Test.allTheThings() T-Shirt (Red)';
        await expect(actualtitle).toContain(expectTitle);
    });
    it ("verify the product price with total price", async() => {
        const actualTitile = await performanceGlitchUserActions.title();
        console.log(actualTitile);
        await expect(actualTitile).toContain("Test.allTheThings() T-Shirt (Red)");

        const actualPrice = await performanceGlitchUserActions.productprice();
        console.log(actualPrice);
        const expectedPrice = await performanceGlitchUserActions.totalPrice();
        console.log(expectedPrice);
        await expect(actualPrice).toBeCloseTo(expectedPrice);
    });
    it("finish the checkout", async () => {
        await performanceGlitchUserActions.finishButton();
        const successOrderB= await performanceGlitchUserActions.successbanner()
        console.log(successOrderB);
        await expect(successOrderB).toContain('Thank you for your order!');
    });
    
    it ("click on the humbergar manu and logout the webstie", async ()=>{
        await performanceGlitchUserActions.clickMenuButton();
        await performanceGlitchUserActions.logoutButtion();
    });
});