// import {browser, element, by} from 'protractor'; //gives you intellisense, comment out when running tests

browser.ignoreSynchronization = true; //allows you to use protractor on non-angular webpages

//Order Page Describe
describe("Angular Slice Order Page", ()=>{

    //every it() is a test. first parameter is the name of the test.
    it("Should go to the Order Page", ()=>{

        browser.get("http://localhost:4200/order");

    });

    it("Should try to click first order button and make alert",  ()=>{
        let orderBtn = element(by.name("orderBtn24"));
        orderBtn.click();
        browser.sleep(1000);
    });

    it("Should close alert popup", ()=>{
        browser.switchTo().alert().dismiss();
        browser.sleep(1000);
    });

    it("Should click login button", ()=>{
        let pullDownBtn = element(by.className("mat-menu-trigger mat-icon-button mat-button-base"));
        pullDownBtn.click();
        browser.sleep(1000);

        let logInBtn = element(by.className("mat-menu-item"));
        logInBtn.click();
        browser.sleep(1000);
    });

    it("Should type in login info and login", ()=>{
        let usernameBar = element(by.id("user"));
        usernameBar.sendKeys("test2");
        let passwordBar = element(by.id("pass"));
        passwordBar.sendKeys("pass2");
        browser.sleep(1000);

        let loginBtn = element(by.id("button"));
        loginBtn.click();
        browser.sleep(1000);
    });

});