document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite-field');
    const depositeAmount = document.getElementById('deposit-amount');
    const depositeFieldNumber = parseFloat(depositeField.value);
    const depositeAmountNumber = parseFloat(depositeAmount.innerText);

    // sum deposite field and deposite
    depositeAmount.innerText = depositeFieldNumber + depositeAmountNumber;

    //after deposite clear depositefield
    depositeField.value = '';
});


// withdraw part start 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // button jader niye kaj korbe tader sobaike id diye dhore ana hoiche
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = document.getElementById('withdraw-amount');
    const blanceAmount = document.getElementById('blance-amount');

    // dhore anar por tader sobaike number e convert kora hoiche
    const withdrawFieldNumber = parseFloat(withdrawField.value);
    const withdrawAmountNumber = parseFloat(withdrawAmount.innerText);
    const blanceAmountNumber = parseFloat(blanceAmount.innerText);

    // erpor jog biyog kora hoiche
    withdrawAmount.innerText = withdrawFieldNumber + withdrawAmountNumber;
    blanceAmount.innerText = blanceAmountNumber - withdrawFieldNumber;

    // field clear kora hoiche
    withdrawField.value = '';

});