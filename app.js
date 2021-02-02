let log = ['History of all operations: '];
let logIndex = 0;

function getResults(){
    let operation = data.operation();
    if(operation !== 'history'){
        let a = data.a();
        let b = function () {
            if (operation !== 'sin') {
                return data.b();
            }
        };
        let result = operations[operation](a,b());
        let output = `Operation ${operation} finished with result ${result}`
        alert(output);
        let next = confirm('Do you want to make more calculations?');
        logIndex++;
        log[logIndex] = `${logIndex}) ${output}`;
        if(next){
            getResults();
        }
    }else{
        operations[operation]();
    }
}

const getData = {
    getOperation: function () {
        let operation = 0;
        while(operation === 0){
            operation = prompt("Enter math operation(+, -, *, /, sin, history)");
            switch (operation) {
            case "+":
                operation = "sum";
                break;
            case "-":
                operation = "diff";
                break;
            case "*":
                operation = "mult";
                break;
            case "/":
                operation = "div";
                break;
            case "sin":
                operation = "sin";
                break;
            case "history":
                operation = "history";
                break;
            default:
                operation = 0;
                break;
            }
        }
        return operation;
    },

    getFirstOperand: function () {
            let operand;
            do{
                operand = +prompt("Enter the first operand");
            }while(operand !== operand);
        return operand;
    },

    getSecondOperand: function () {
        let operand;
            do{
                operand = +prompt("Enter the second operand");
            }while(operand !== operand && this.getOperation === 'sin');
        return operand;
    }
}

const operations = {
    sum: function (a, b) {
        return a + b;
    },
    diff: function (a, b) {
        return a - b;
    },
    mult: function (a, b) {
        return a * b;
    },
    div: function (a, b) {
        return a / b;
    },
    sin: function (a) {
        return Math.sin(a);
    },
    history: function(){
        alert(log.join('\n'));
    },
}

const data = {
    operation: function(){
        return getData.getOperation();
    },

    a: function(){
        return getData.getFirstOperand();
    },

    b: function(){
        return getData.getSecondOperand();
        let b;
        if(this.operation == 'sin'){
            b = getData.getSecondOperand();
        };
        return b;
    },
}
getResults();















