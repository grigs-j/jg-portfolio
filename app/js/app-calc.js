//creating calc class to get  calculator object
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        //clearing calc on page load(default)
        this.clear();
    }

    clear() {
        //func to clear all values
        //these are all the values we are storing for our calculator
        this.currentOperand = "";
        this.previousOperand = "";
        //??
        this.operation = undefined;
    }

    delete() {
        //cuts off last number from the end, and saves it to current operand variable
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        //if value passed is already a period, we return which kicks us out of statement
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand =
            //converts to string so appending is easier, keeping them numbers js will add together
            this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        //return nothing if current operation is an empyty string
        if (this.currentOperand === "") return;
        //checks if you're aleady computing something, it runs compute() and then goes on to the next operation
        if (this.previousOperand !== "") {
            this.compute();
        }
        //point this to our calculator object so it can use it
        this.operation = operation;
        //setting out previous operand to current so it will display in the pervious line
        this.previousOperand = this.currentOperand;
        //setting current operand to empty string
        this.currentOperand = "";
    }

    compute() {
        let computation;
        //converting string to number
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        //checking if what is clicked is not a number, then return, which kicks out of the func
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case "+":
                computation = prev + current;
                break;
            case "-":
                computation = prev - current;
                break;
            case "*":
                computation = prev * current;
                break;
            case "/":
                computation = prev / current;
                break;

            default:
                return;
        }
        //finished result held in computation
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    //helper func for commas
    getDisplayNumber(number) {
        //all of this is because when you try to parseFloat number and click just a decimal place nothing shows up, along with trying to add multiple zeros, so split it into a string w/ an interger variable and a decimal variable
        const stringNumber = number.toString();
        //takes string and splits it at decimal, turning into an array with the 0 index being before the decimal place, and the 1 index being after
        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];

        let integerDisplay;
        //whenever someone inputs a decimal place or not a number:
        if (isNaN(integerDigits)) {
            integerDisplay = "";
        } else {
            //this allows for commas to be placed by js engine using english vernacular
            integerDisplay = integerDigits.toLocaleString("en", {
                //arg saying only 1 decimal place is allowed
                maximumFractionDigits: 0,
            });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        //setting current operand text to getdispalynumber() value
        this.currentOperandTextElement.innerText = this.getDisplayNumber(
            this.currentOperand
        );
        //if operation actually does something
        if (this.operation != null) {
            //append previous operation to the top line with operaton, as a string, held in operation variable
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
                this.previousOperand
            )} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = "";
        }
    }
}

//core calc dom variables
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
    "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
    "[data-current-operand]"
);

//defining our class
//creating calc object with our params we will be passing
const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
);

//forEach method takes in button arg and applies to every button
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        //on click pass text of number we are choosing
        calculator.appendNumber(button.innerText);
        //then update display
        calculator.updateDisplay();
    });
});

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener("click", (button) => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
    calculator.delete();
    calculator.updateDisplay();
});
