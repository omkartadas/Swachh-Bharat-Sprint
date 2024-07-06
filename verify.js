document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('username').value = sessionStorage.getItem('username');
    document.getElementById('mobile').value = sessionStorage.getItem('mobile');
    document.getElementById('school_id').value = sessionStorage.getItem('school_id');
    document.getElementById('password').value = sessionStorage.getItem('password');
});

document.getElementById('otpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
     // Redirect to index.html without verifying OTP unless proper verification system 
    window.location.href = 'index.html';

    // we'll use this for future purpose
    /*
    const enteredOTP = document.getElementById('otp').value;
    const sentOTP = sessionStorage.getItem('sentOTP');

    if (enteredOTP === sentOTP) {
        alert('OTP verified successfully!');
        // Proceed with the form submission to the server
        this.submit();
    } else {
        alert('Invalid OTP. Please try again.');
    }




    */    
});
