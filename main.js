function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var emailPattern = /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    var passwordPattern = /^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    var isValid = true;

    emailError.textContent = "";
    passwordError.textContent = "";

    if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format. Email must not start with a number and contain '@'.";
        isValid = false;
    }

    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character.";
        isValid = false;
    }

    if (isValid) {
        alert("Valid credentials");
    }

    return isValid;
}



