import {element, by, browser} from "protractor";
import {BasePage} from "../../common/page_objects/base.page";

export class LoginPage extends BasePage {

    readonly loginBox: any = {
        username: element(by.name('username')),
        password: element(by.name('password')),
        rememberMe: element(by.css('label[for="rememberMe"]')),
        loginButton: element(by.id('login-btn')),
    };

    public get(url: string = browser.baseUrl) {
        browser.get(url);
    }

    public login(username: string, password: string) {
        this.loginBox.username.clear();
        this.loginBox.username.sendKeys(username);
        this.loginBox.password.clear();
        this.loginBox.password.sendKeys(password);
        this.loginBox.loginButton.click();
    }
}