const signupForm = document.getElementById('register-form');
      const signupMessage = document.getElementById('signup-message');

      signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const studentId = document.getElementById('student-id').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const hintQuestion = document.getElementById('hint-question').value;
        const hintAnswer = document.getElementById('hint-answer').value.trim();

        if (password !== confirmPassword) {
          signupMessage.textContent = 'Passwords do not match.';
          signupMessage.style.display = 'block';
          signupMessage.style.color = '#fca5a5';
          return;
        }

        if (!studentId || !hintQuestion || !hintAnswer) {
          signupMessage.textContent = 'Please complete every field.';
          signupMessage.style.display = 'block';
          signupMessage.style.color = '#fca5a5';
          return;
        }

        const accounts = JSON.parse(localStorage.getItem('accountsDB') || '[]');
        const existingAccount = accounts.find((account) => account.studentId === studentId);

        if (existingAccount) {
          signupMessage.textContent = 'This student ID is already registered.';
          signupMessage.style.display = 'block';
          signupMessage.style.color = '#fca5a5';
          return;
        }

        accounts.push({
          studentId,
          password,
          hintQuestion,
          hintAnswer: hintAnswer.toLowerCase()
        });

        localStorage.setItem('accountsDB', JSON.stringify(accounts));

        signupMessage.textContent = 'Account created. You can now use your personal hint to reset your password.';
        signupMessage.style.display = 'block';
        signupMessage.style.color = '#bbf7d0';
        signupForm.reset();
      });