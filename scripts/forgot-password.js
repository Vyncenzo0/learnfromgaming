      const resetForm = document.getElementById('reset-form');
      const resetMessage = document.getElementById('reset-message');

      resetForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const studentId = document.getElementById('student-id').value.trim();
        const hintQuestion = document.getElementById('hint-question').value;
        const hintAnswer = document.getElementById('hint-answer').value.trim().toLowerCase();
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        const accounts = JSON.parse(localStorage.getItem('accountsDB') || '[]');
        const savedAccount = accounts.find((account) => account.studentId === studentId);

        if (!savedAccount) {
          resetMessage.textContent = 'No saved account was found. Please create an account first.';
          resetMessage.style.display = 'block';
          resetMessage.style.color = '#fca5a5';
          return;
        }

        if (hintQuestion !== savedAccount.hintQuestion || hintAnswer !== savedAccount.hintAnswer) {
          resetMessage.textContent = 'The personal hint answer does not match.';
          resetMessage.style.display = 'block';
          resetMessage.style.color = '#fca5a5';
          return;
        }

        if (newPassword !== confirmPassword) {
          resetMessage.textContent = 'New passwords do not match.';
          resetMessage.style.display = 'block';
          resetMessage.style.color = '#fca5a5';
          return;
        }

        savedAccount.password = newPassword;
        localStorage.setItem('accountsDB', JSON.stringify(accounts));

        resetMessage.textContent = 'Password reset complete. You can now sign in with your new password.';
        resetMessage.style.display = 'block';
        resetMessage.style.color = '#bbf7d0';
        resetForm.reset();
      });