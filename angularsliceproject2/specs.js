// import { protractor } from "protractor/built/ptor";
// import {browser, element, by} from 'protractor'; //gives you intellisense, comment out when running tests

browser.ignoreSynchronization = true; //allows you to use protractor on non-angular webpages

//Order Page Describe
// describe("Angular Slice Order Page", ()=>{

//     //every it() is a test. first parameter is the name of the test.
//     it("Should go to the Order Page", ()=>{

//         browser.get("http://localhost:4200/order");

//     });

//     it("Should try to click first order button and make alert",  ()=>{
//         let orderBtn = element(by.name("orderBtn24"));
//         orderBtn.click();
//         browser.sleep(1000);
//     });

//     it("Should close alert popup", ()=>{
//         browser.switchTo().alert().dismiss();
//         browser.sleep(1000);
//     });

//     it("Should click login button", ()=>{
//         let pullDownBtn = element(by.className("mat-menu-trigger mat-icon-button mat-button-base"));
//         pullDownBtn.click();
//         browser.sleep(1000);

//         let logInBtn = element(by.className("mat-menu-item"));
//         logInBtn.click();
//         browser.sleep(1000);
//     });

//     it("Should type in login info and login", ()=>{
//         let usernameBar = element(by.id("user"));
//         usernameBar.sendKeys("test2");
//         let passwordBar = element(by.id("pass"));
//         passwordBar.sendKeys("pass2");
//         browser.sleep(1000);

//         let loginBtn = element(by.id("button"));
//         loginBtn.click();
//         browser.sleep(1000);
//     });

//     it("Should go to order page", ()=>{
//         let orderBtn = element(by.xpath('//*[@id="nav_bar"]/div[2]/div/div/a[2]'));
//         orderBtn.click();
//         browser.sleep(1000);
//     });

//     it("Should try to click first order button",  ()=>{
//         let orderBtn = element(by.name("orderBtn24"));
//         orderBtn.click();
//         browser.sleep(1000);
//     });

//     it("Should open Pizza Panel and order 2 pizzas",  ()=>{
//         let panelBtn = element(by.id("panel1"));
//         panelBtn.click();
//         browser.sleep(1000);


//         let amountSelect = element(by.id("input_1"));
//         amountSelect.click();
//         browser.sleep(1000);

//         let amountOption = element.all(by.xpath('//*[@id="input_1"]/option[2]'));
//         amountOption.click();
//         browser.sleep(1000);

//         let orderBtn = element(by.name("orderBtn1"));
//         orderBtn.click();
//         browser.sleep(1000);
//     });

//     it("Should open Desserts panel and scroll to bottom and order", ()=>{
//         let panelBtn = element(by.id("panel5"));
//         panelBtn.click();
//         browser.sleep(1000);

//         let card = element(by.id("card38"));
//         browser.executeScript('arguments[0].scrollIntoView()', card.getWebElement());
//         browser.sleep(1000);

//         let orderBtn = element(by.name("orderBtn38"));
//         orderBtn.click();
//         browser.sleep(1000);
//     });

//     it("Should click Checkout button and go to checkout page", ()=>{
//         let checkOutBtn = element(by.id("checkOutButton"));
//         checkOutBtn.click();
//         browser.sleep(1000);
//     });
// });

// Test: Basic Login Page Functionality
// describe("Angular Slice Login Page", ()=>{
//     it("Should go to Home Page", ()=>{
//         browser.get("http://localhost:4200/home");
//     });

//     it("Should click login button", ()=>{
//         let pullDownBtn = element(by.id("loginMenu"));
//         pullDownBtn.click();
//         browser.sleep(1000);

//         let loginBtn = element(by.id("loginButton"));
//         loginBtn.click();
//         browser.sleep(1000);
//     });

//     it("Should try to trigger the login warning", ()=>{
//         let loginBtn = element(by.id("button"));
//         loginBtn.click();
//         browser.sleep(1000);
//     });

//     it("Should close the alert message", ()=>{
//         browser.switchTo().alert().dismiss();
//         browser.sleep(1000);
//     });

//     it("Should try to login", ()=>{
//         let usernameBar = element(by.id("user"));
//         usernameBar.sendKeys("tao");
       
//         let passwordBar = element(by.id("pass"));
//         passwordBar.sendKeys("password");
//         browser.sleep(1000);
        
//         let loginBtn = element(by.id("button"));
//         loginBtn.click();
//         browser.sleep(2000);
//     });
// });

// Test: Create Account Page
describe("Create Account Test", ()=>{
    it("Should go to the home page", ()=>{
        browser.get("http://localhost:4200/home");
        browser.sleep(2000);
    });

    it("Should click the create account button", ()=>{
        let pullDownBtn = element(by.id("loginMenu"));
        pullDownBtn.click();
        browser.sleep(1000);

        let acctButton = element(by.id("createActBtn"));
        acctButton.click();
        browser.sleep(1000);
    });

    it("Should try to trigger the alert", ()=>{
        let acctBtn = element(by.id("signbtn"));
        acctBtn.click();
        browser.sleep(1000);
    });

    it("Should close the alert message", ()=>{
        browser.switchTo().alert().dismiss();
        browser.sleep(1000);
    });

    it("Should try to create a new Account", ()=>{
        let usernameBar = element(by.id("usr"));
        usernameBar.sendKeys("TheProtractorTest");

        let passwordBar = element(by.id("pass"));
        passwordBar.sendKeys("password");

        acctBtn = element(by.id("signbtn"));
        acctBtn.click();
        browser.sleep(3000);
    });
});


