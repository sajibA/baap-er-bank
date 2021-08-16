// handale deposite button event
document.getElementById('deposite-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposite-input');

    const newDepositAmountText = depositInput.value;

    const newDepositAmount = parseFloat(newDepositAmountText);
    // update deposit total
    const depositTotal = document.getElementById('deposite-total');

    const previousDepositText = depositTotal.innerText;

    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // update account balance



    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceText = balanceTotal.innerText;
    const previousBlanceAmount = parseFloat(previousBalanceText);
    const newBlanceTotal = previousBlanceAmount + newDepositAmount;
    balanceTotal.innerText = newBlanceTotal;

    // clear the deposite input field
    depositInput.value = '';
});

// handel withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;







    withdrawInput.value = '';

})