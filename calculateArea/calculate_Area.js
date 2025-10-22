let Amount;
let Amount2;
let Amount3;

function calculateExp(){
    Amount = parseFloat(document.getElementById('Amount').value);
    Amount2 = parseFloat(document.getElementById('Amount2').value);
    Amount3 = parseFloat(document.getElementById('Amount3').value);

    let total = Amount + Amount2 + Amount3;

    document.getElementById('result').innerText = `The total amount  is: ${total}`;
}