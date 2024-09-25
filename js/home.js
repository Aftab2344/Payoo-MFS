// cash in
document.getElementById('btn-addMoney').addEventListener('click',function(event){
    event.preventDefault()
    const amount=numberOfAmount('add-money');
    const pinCode=numberOfAmount('add-money-pin-code');
    // validation 
    if(isNaN(amount)){
        alert('something went wrong')
        return;
    }
    // validation
    if(pinCode===1234){
        const balance=numberOfTextAmount('balance');
        const newBalance=balance+amount;
        
        document.getElementById('balance').innerText=newBalance;

        // add to transaction part
        const p=document.createElement('p');
        p.innerText=`Add money ${amount} ,New balance ${newBalance}`;
        p.classList.add('text-green-600','p');
        document.getElementById('transaction-history').appendChild(p);
    }
    else{
        alert('wrong pin code');
    }
})
// cash out
document.getElementById('btn-cashout').addEventListener('click',function(event){
    event.preventDefault()
    // step-1: get cash out amount 
    const amount=numberOfAmount('cash-out');
    const pinCode=numberOfAmount('cash-out-pin-code')
    // validation
    if(isNaN(amount)){
        alert('Something went wrong.')
        return;
    }
    // validation
    if(pinCode===1234){
        const balance=numberOfTextAmount('balance');
        const newBalance=balance-amount;
        // validation
        if(amount>balance){
            alert('Insufficient amount')
            return;
        }
        document.getElementById('balance').innerText=newBalance;
        // add to transaction section
        const p=document.createElement('p');
        p.innerText=`Cash Out ${amount}, New balance ${newBalance}`;
        p.classList.add('text-red-600','p');
        document.getElementById('transaction-history').appendChild(p);
    }
    else{
        alert('wrong pin')
    }
})


// show different section

document.getElementById('click-add-money').addEventListener('click',function(){
    showSectionById('first-id')
})
document.getElementById('click-cash-out').addEventListener('click',function(){
    showSectionById('second-id')
})
document.getElementById('transaction').addEventListener('click',function(){
    showSectionById('transaction-section')
})

// 
