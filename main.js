
// Amount input field
const amount = document.getElementById('amount');

// Calculate button
const button = document.getElementById('calculate');

const taxAmount = document.querySelector('.taxed-amount');

const total = document.querySelector('.total');

button.addEventListener('click', () => {
    // Check if the input field has a value
    let value = amount.value;

    if (value) {
        calculateElevy(Number(value));
    }
});

const calculateElevy = (amount) => {
    const elevyPercentage = 0.015;

    if (amount > 100) {
        let taxableAmount = amount - 100;

        let tax = taxableAmount * elevyPercentage;

        taxAmount.innerHTML = "₵" + tax.toFixed(2);

        let totalAmount = amount + tax;

        total.innerHTML = "₵" +  totalAmount.toFixed(2);

    } else {
        taxAmount.innerHTML = "₵"  + amount;
        total.innerHTML = "₵" +  amount;
    }
}