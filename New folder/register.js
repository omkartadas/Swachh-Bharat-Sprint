function sendOTP() {
    const username = document.getElementById('username').value;
    const mobile = document.getElementById('mobile').value;
    const schoolId = document.getElementById('school_id').value;
    const password = document.getElementById('password').value;

    alert(`OTP sent to ${mobile}. Please check your mobile.`);

    // Save user details and sent OTP
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('mobile', mobile);
    sessionStorage.setItem('school_id', schoolId);
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('sentOTP', generateRandomOTP()); // OTP logic

    window.location.href = 'verify.html';
}

function generateRandomOTP() {
    return Math.floor(1000 + Math.random() * 9000); //example OTP Generation
}
