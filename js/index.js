//step-1: set event handler

document.getElementById('btn-login').addEventListener('click',function(event){
    //step-2: Prevent default behavior(prevent loading browser);
    event.preventDefault();
    //step-3: get the phone number
    const phoneNumber=document.getElementById('phone-number').value;
    
    const pinCode=document.getElementById('pin-code').value;
    console.log(phoneNumber,pinCode)
    // temporary method
    if(phoneNumber ==='5' && pinCode ==='1234'){
        
        window.location.href='/home.html';
    }
    else{
        alert('wrong phone number or Pin');
    }
    
})