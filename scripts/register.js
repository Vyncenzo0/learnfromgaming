document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Grab values using their fixed IDs
    const name = document.getElementById('name').value;
    const studentId = document.getElementById('student-id').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const hintQuestion = document.getElementById('hint-question').value;
    const hintAnswer = document.getElementById('hint-answer').value;
    const messageBox = document.getElementById('register-message');

    // Simple validation check
    if (password !== confirmPassword) {
        messageBox.style.display = "block";
        messageBox.style.color = "red";
        messageBox.textContent = "Passwords do not match!";
        return;
    }

    // If everything is good:
    messageBox.style.display = "block";
    messageBox.style.color = "green";
    messageBox.textContent = "Account created successfully!";