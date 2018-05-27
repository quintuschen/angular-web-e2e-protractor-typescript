import {by, element} from "protractor";
import {BasePage} from "../../common/page_objects/base.page";

export class SuperCalculatorPage extends BasePage {
    readonly calculator: any = {
        firstOperandField: element(by.model('first')),
        secondOperandField: element(by.model('second')),
        operatorDropDown: element(by.model('operator')),
        calculateButton: element(by.id('gobutton')),
        result: element(by.css('h2.ng-binding')),
    };

    public selectOperator(value: string) {
        this.calculator.operatorDropDown.element(by.css(`[value=${value}]`)).click();
    }
}