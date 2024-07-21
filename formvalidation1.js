
let isValid=true;

function validateForm() {
  
  isValid=true;

  // Clear previous error messages
  document.getElementById('usernameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('phoneError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('confirmPasswordError').textContent = '';

  
   let username = document.getElementById('username').value;
   if (username === "") {
       document.getElementById('usernameError').textContent = 'Username is required';
       isValid = false;
   } else if (username.length < 5) {
       document.getElementById('usernameError').textContent = 'Username must be at least 5 characters long';
       isValid = false;
   }
 
   // Validate email
   let email = document.getElementById('email').value;
   let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if (email === "") {
       document.getElementById('emailError').textContent = 'Email is required';
       isValid = false;
   } else if (!emailPattern.test(email)) {
       document.getElementById('emailError').textContent = 'Invalid email format';
       isValid = false;
   }
 
   // Validate phone number
   let phone = document.getElementById('phone').value;
   let phonePattern = /^[0-9]{10}$/;
   if (phone === "") {
       document.getElementById('phoneError').textContent = 'Phone number is required';
       isValid = false;
   } else if (phone === '123456789') {
     document.getElementById('phoneError').textContent = 'Invalid Phone no';
     isValid = false;
   }
    else if (!phonePattern.test(phone)) {
       document.getElementById('phoneError').textContent = 'Phone number must be 10 digits';
       isValid = false;
   } 
 
   // Validate password
   let password = document.getElementById('password').value;
   if (password === "") {
       document.getElementById('passwordError').textContent = 'Password is required';
       isValid = false;
   } else if (password.length < 8) {
       document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long';
       isValid = false;
   } else if (password === username) {
     document.getElementById('passwordError').textContent = "Username can't be password";
     isValid=false;
   } else if (password === 'password' || password === 'Password') {
     document.getElementById('passwordError').textContent = "Password is not strong.  Try agian";
     isValid=false;
   } else if (password === '12345678') {
     document.getElementById('passwordError').textContent = "Password is not strong.  Try again";
     isValid=false;
   }
 
   // Validate confirm password
   let confirmPassword = document.getElementById('confirmPassword').value;
   if (confirmPassword === "") {
       document.getElementById('confirmPasswordError').textContent = 'Confirm Password is required';
       isValid = false;
   } else if (confirmPassword !== password) {
       document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
       isValid = false;
   }

    if (isValid===true) {
      document.querySelector('body').innerHTML='<h1 >Form successfully submitted</h1>'
    }
 
    return isValid;
   }

   
