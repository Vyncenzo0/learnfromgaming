document.addEventListener('DOMContentLoaded', () => {
    // 1. Updated to match your HTML form ID: 'registerForm'
    const loginForm = document.getElementById('registerForm'); 
    
    // Create a dynamic message element since one doesn't exist in your HTML block
    const loginMessage = document.createElement('p');
    loginMessage.style.display = 'none';
    loginMessage.style.marginTop = '15px';
    loginMessage.style.textAlign = 'center';
    loginMessage.style.fontWeight = 'bold';
    
    if (loginForm) {
        // Inject the message container right below the form
        loginForm.appendChild(loginMessage);

        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // 2. Updated to match your HTML input fields: 'regName' and 'regPass'
            const studentId = document.getElementById('regName').value.trim();
            const password = document.getElementById('regPass').value;

            // Simple validation check
            if (!studentId || !password) {
                loginMessage.textContent = 'Please fill in all fields.';
                loginMessage.style.display = 'block';
                loginMessage.style.color = '#fca5a5';
                return;
            }

            // Fetch accounts array from localStorage (fallback to empty array if missing)
            const accounts = JSON.parse(localStorage.getItem('accountsDB') || '[]');
            
            // Search local database array for matching credentials
            const account = accounts.find((item) => item.studentId === studentId && item.password === password);

            if (!account) {
                loginMessage.textContent = 'Pilot Callsign or Access Key is incorrect.';
                loginMessage.style.display = 'block';
                loginMessage.style.color = '#fca5a5';
                return;
            }

            // Success state handling
            loginMessage.textContent = 'Login successful. Welcome back, Pilot!';
            loginMessage.style.display = 'block';
            loginMessage.style.color = '#bbf7d0';
            loginForm.reset();
                
            // Delay redirection slightly so the user sees the success message
            setTimeout(() => {
                window.location.href = 'home.html';
            }, 1000); 
        });
    }
});