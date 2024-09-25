
// -----------------------------------------------------

// shared function

// for input field

function numberOfAmount(id){
    const amount=document.getElementById(id).value;
    const amountNumber=parseFloat(amount);
    return amountNumber;
}
// for text field

function numberOfTextAmount(id){
    const amount=document.getElementById(id).innerText;
    const amountNumber=parseFloat(amount);
    return amountNumber;
}

// showing add money,cash out and transaction section

function showSectionById(id){
    // hide all section
    document.getElementById('first-id').classList.add('hidden');
    document.getElementById('second-id').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    // show the section which contain provided id 
    document.getElementById(id).classList.remove('hidden');
}




