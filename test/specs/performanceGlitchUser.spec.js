const performanceGlitchUserActions = require("../pages/question-3/performanceGlitchUserActions.js");

describe("Login with performance_glitch_user and Reset App State Then filter by name (Z to A) and select the first product into the cart", () => {
    it("login with performance_glitch_user", async () => {
        await performanceGlitchUserActions.enterUsername();
        await performanceGlitchUserActions.enterPassword();
        await performanceGlitchUserActions.loginButton();
    });

    it("hamburger menu Reset App State", async () => {
        await performanceGlitchUserActions.clickHumbergerMenuButton();
        await performanceGlitchUserActions.clickResetApp();
    });

    it("Filter the product Z to A and Add to cart one proudct", async() =>{
        await performanceGlitchUserActions.filterProduct();
        await performanceGlitchUserActions.addCartProduct();
    });
    it("click on checkout", async () => {
        await performanceGlitchUserActions.clickShippingCart();
        await performanceGlitchUserActions.clickCheckout();
    });

    it("Enter personal info", async () =>{
        await performanceGlitchUserActions.enterFirstName();
        await performanceGlitchUserActions.enterLastName();
        await performanceGlitchUserActions.enterZipCode();
        await performanceGlitchUserActions.clickCountineButton();
    });

    it ("Verify products title", async () =>{
        const actualtitle = await performanceGlitchUserActions.productTitle();
        const expectTitle = 'Test.allTheThings() T-Shirt (Red)';
        await expect(actualtitle).toContain(expectTitle);
    });
    it ("verify the product price with total price", async() => {
        const actualPrice = await performanceGlitchUserActions.productPrice();
        const expectedPrice = await performanceGlitchUserActions.totalPrice();
        await expect(actualPrice).toBeCloseTo(expectedPrice);
    });
    it("checkout", async () => {
        await performanceGlitchUserActions.finishButton();
        const successOrderB= await performanceGlitchUserActions.successOrder()
        await expect(successOrderB).toContain('Thank you for your order!');
    });
    
    it ("logout the webstie", async ()=>{
        await performanceGlitchUserActions.clickHumbergerMenuButton();
        await performanceGlitchUserActions.logoutButton();
    });
});