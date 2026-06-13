const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const studentId = document.getElementById('student-id').value.trim();
  const password = document.getElementById('password').value;

  if (!studentId || !password) {
    loginMessage.textContent = 'Please fill in all fields.';
    loginMessage.style.display = 'block';
    loginMessage.style.color = '#fca5a5';
    return;
  }

  const accounts = JSON.parse(localStorage.getItem('accountsDB') || '[]');
  const account = accounts.find((item) => item.studentId === studentId && item.password === password);

  if (!account) {
    loginMessage.textContent = 'Student ID or password is incorrect.';
    loginMessage.style.display = 'block';
    loginMessage.style.color = '#fca5a5';
    return;
  }

  loginMessage.textContent = 'Login successful. Welcome back!';
  loginMessage.style.display = 'block';
  loginMessage.style.color = '#bbf7d0';
  loginForm.reset();
        
  setTimeout(() => {
    window.location.href = 'home.html';
  }, 1000); 
});