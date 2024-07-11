//Getting form ka data
async function sendOTP() {
    const username = document.getElementById('username').value;
    const mobile = document.getElementById('mobile').value;
    const schoolId = document.getElementById('school_id').value; // set default value to open OPEN
    const password = document.getElementById('password').value; //

    //creating a data object
    const registrationData = {
        user_name: username,
        mobile: mobile,
        school_id: schoolId,
        password: password
    };

    try { //send data to the server
        const response = await fetch('https://test.smartcookie.in/core/Version4/SpectatorRegistrationAPI_V2.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' //JSON format mei sending
            },
            body: JSON.stringify(registrationData) 
        });

        const result = await response.json();
        if (result.responseStatus === 200) {
            alert(`OTP sent to ${mobile}. Please check your mobile.`);

            // Save user details and sent OTP
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('mobile', mobile);
            sessionStorage.setItem('school_id', schoolId);
            sessionStorage.setItem('password', password);
            sessionStorage.setItem('sentOTP', generateRandomOTP()); // OTP logic

            window.location.href = 'verify.html';
        } else {
            alert('Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}

function generateRandomOTP() {
    return Math.floor(1000 + Math.random() * 9000); // Example OTP Generation
}
