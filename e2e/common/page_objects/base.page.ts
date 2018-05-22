import {browser, by, element, protractor} from "protractor";
import {GLOBAL_SETTINGS} from "../../support/constants";

export class BasePage {
    protected toast: any;
    protected dialog: any;

    constructor() {
        this.toast = {
            toastContainer: element(by.id('toast-container')),
        };
        this.dialog = {
            header: element(by.css('div.modal-header.ng-binding.ng-scope')),
            confirmButton: element(by.css('[ng-click="exVm.sure()"]')),
            cancelButton: element(by.css('ng-click="exVm.cancel()"')),

        };
    }

    public getToastMessages() {
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.toast.toastContainer), GLOBAL_SETTINGS.WAITING_TIME_FOR_ELEMENTS);
        let text = this.toast.toastContainer.getText();
        // This step is to dismiss the toast message after getting the text, otherwise you might the multiple toast messages from other steps.
        this.toast.toastContainer.click();
        return text;
    };

    public getDialogTitle() {
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.dialog.header), GLOBAL_SETTINGS.WAITING_TIME_FOR_ELEMENTS);
        return this.dialog.header.getText();
    };

    public dialogConfirm() {
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.dialog.confirmButton), GLOBAL_SETTINGS.WAITING_TIME_FOR_ELEMENTS);
        this.dialog.confirmButton.click();
    };

    public dialogCancel() {
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.dialog.cancelButton), GLOBAL_SETTINGS.WAITING_TIME_FOR_ELEMENTS);
        this.dialog.cancelButton.click();
    };
}