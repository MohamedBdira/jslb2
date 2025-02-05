function performoperation(){
    let n1 = parseInt(document.getElementById('input').value);
    let n2 = parseInt(document.getElementById('input').value);

    if(!isNaN(n1) && !isNaN(n2)){
        let result = multiply(n1, n2);

        displayresult(result);
    } else {
        displayresult('please enter valid numbers');
    }
}

function multiply(a, b){ a = 2, b = 5 
    debugger;

    return a * b;
}

function displayresult(result){
    const resultelement = document.getElementById('result');
    resultelement.textContent = `The result is: ${result}`;
}