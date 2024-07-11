//fills form kee field with data stored in sessions
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('username').value = sessionStorage.getItem('username');
    document.getElementById('mobile').value = sessionStorage.getItem('mobile');
    document.getElementById('school_id').value = sessionStorage.getItem('school_id');
    document.getElementById('password').value = sessionStorage.getItem('password');
});

//handle OTP submission
document.getElementById('otpForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    //get entered OTP and compare with Sent OTP
    const enteredOTP = document.getElementById('otp').value;
    const sentOTP = sessionStorage.getItem('sentOTP');

    if (enteredOTP === sentOTP) {
        //prepare login data for API Request
        const loginData = {
            User_email: document.getElementById('username').value,
            User_phone: document.getElementById('mobile').value,
            User_entity: "105",
            User_school: document.getElementById('school_id').value,
            User_countryCode: "91",
            delivery_method: "sms"
        };

        try { //send OTP verification to the server
            const response = await fetch('https://test.smartcookie.in/core/Version6/login_with_otp.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            const result = await response.json();
            if (result.responseStatus === 200) {
                alert('OTP verified successfully!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    } else {
        alert('Invalid OTP. Please try again.');
    }
});
