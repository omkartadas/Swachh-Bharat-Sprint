async function sendOTP() {
    const username = document.getElementById('username').value;
    const mobile = document.getElementById('mobile').value;
    let schoolId = document.getElementById('school_id').value;
    const password = document.getElementById('password').value;

    // Set default value for schoolId if empty
    if (schoolId.trim() === '') {
        schoolId = 'OPEN'; // Default value
    }

    const registrationData = {
        user_name: username,
        mobile: mobile,
        school_id: schoolId,
        password: password
    };

    try {
        const response = await fetch('https://test.smartcookie.in/core/Version4/SpectatorRegistrationAPI_V2.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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
            sessionStorage.setItem('sentOTP', generateRandomOTP());

            window.location.href = 'verify.html';
        } else {
            alert('Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}
