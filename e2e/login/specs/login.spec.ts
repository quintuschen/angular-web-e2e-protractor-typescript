import {LoginPage} from "../page_objects/login.page";

describe("login", ()=>{
   it("should be able to log in", ()=>{
        let loginPage = new LoginPage();
        loginPage.get();
        loginPage.login('admin', 'admin');
   })
});