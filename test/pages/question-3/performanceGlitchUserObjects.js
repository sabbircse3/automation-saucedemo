class performanceGlitchUserObjects{
    get enterUserName() { 
        return $('//input[@id="user-name"]'); 
    } 
    get enterPassword() { 
        return $('//input[@id="password"]'); 
    }
    get loginButton() { 
        return $('//input[@id="login-button"]'); 
    }
    get clickHumbergerMenuButton(){
        return $ ('//button[@id="react-burger-menu-btn"]');
    }
    get clickResetApp (){
        return $ ('//a[@id="reset_sidebar_link"]');
    }
    get filterProduct(){
        return $ ("//select[@class='product_sort_container']");
    }
    get addCartProduct(){
        return $ ('//button[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }
    get clickShippingCart(){
        return $ ('//a[@class="shopping_cart_link"]');
    }
    get clickCheckout(){
        return $ ('//button[@id="checkout"]');
    }
    get enterFirstName(){
        return $ ('//input[@placeholder="First Name"]');
    }
    get enterLastName(){
        return $ ('//input[@placeholder="Last Name"]');
    }
    get enterZipCode(){
        return $ ('//input[@placeholder="Zip/Postal Code"]');
    }
    get clickCountineButton(){
        return $ ( '//input[@id="continue"]');
    }
    get productTitle(){
        return $ ('//div[@data-test="inventory-item-name"]');
    }
    get productPrice(){
        return $ ('//div[@class="inventory_item_price"]');
    }
    get totalPrice(){
        return $ ('//div[@class="summary_subtotal_label"]');
    }
    get finishButton(){
        return $ ('//button[@id="finish"]');
    }
    get successOrder(){
        return $ ("//h2[text()='Thank you for your order!']");
    }
    get logoutButton(){
        return $ ('//a[@id="logout_sidebar_link"]');
    }
}
module.exports = new performanceGlitchUserObjects();