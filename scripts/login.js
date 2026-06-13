document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentId = document.getElementById('student-id').value;
    const password = document.getElementById('password').value;

    if (!studentId || !password) {
        const messageBox = document.getElementById('login-message');
        messageBox.style.display = 'block';
        messageBox.textContent = 'Please fill out all fields.';
        return;
    }


    console.log("Attempting login for:", studentId);
});