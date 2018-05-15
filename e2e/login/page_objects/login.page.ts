import {element, by, browser} from "protractor";

export class LoginPage {

    readonly page = {
        username: element(by.name('username')),
        password: element(by.name('password')),
        rememberMe: element(by.css('label[for="rememberMe"]')),
        loginButton: element(by.id('login-btn')),
    };

    public get(url: string = browser.baseUrl) {
        browser.get(url);
    }

    public login(username: string, password: string) {
        this.page.username.clear();
        this.page.username.sendKeys(username);
        this.page.password.clear();
        this.page.password.sendKeys(password);
        this.page.loginButton.click();
    }
}