import {SuperCalculatorPage} from "../page_objects/superCalculator.page";

describe("Super Calculator", () => {
    const superCalculator = new SuperCalculatorPage();
    beforeAll(() => {
        superCalculator.get();
    });

    it("should be able to add two integers", () => {
        superCalculator.calculator.firstOperandField.sendKeys(2);
        superCalculator.calculator.secondOperandField.sendKeys(3);
        superCalculator.selectOperator("ADDITION");
        superCalculator.calculator.calculateButton.click();
        expect(superCalculator.calculator.result.getText()).toBe('5');
    });

    it("should be able to multiply two integers", () =>{
        superCalculator.calculator.firstOperandField.sendKeys(3);
        superCalculator.calculator.secondOperandField.sendKeys(5);
        superCalculator.selectOperator("MULTIPLICATION");
        superCalculator.calculator.calculateButton.click();
        expect(superCalculator.calculator.result.getText()).toBe('15');
    })
});