import {LoginPage} from "../page_objects/login.page";

describe("login", () => {
    const loginPage = new LoginPage();
    beforeAll(() => {
        loginPage.get();
    });
    it("should be able to log in", () => {
        loginPage.login('admin', 'admin');
    })
});