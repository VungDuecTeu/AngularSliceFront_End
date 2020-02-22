import {browser, element, by} from 'protractor'; //gives you intellisense

browser.ignoreSynchronization = true; //allows you to use protractor on non-angular webpages

//tells brief description of the suite of tests you are writting
describe("Angular Slice Order Page", ()=>{

    //every it() is a test. first parameter is the name of the test.
    it("Should go to the Order Page", ()=>{

        browser.get("http://localhost:4200/order");

    });

    it("Should try to click first order button and make alert",  ()=>{

        // let searchBar = element(by.name("query"));
        // searchBar.sendKeys("Google Pixel 4");
        // browser.sleep(1000);

        // let num =  0;
        // while(num == 0 || (num > 9 && numb < 21)){
        //     num = Math.floor(Math.random() * (39 - 1 + 1)) + 1;
        // }

        // let orderBtn = element(by.className("orderBtn" + num));
        // searchBtn.click();

        // browser.sleep(1000);

        // //expect and to be are your assertions
        // expect(browser.get);
    });

});