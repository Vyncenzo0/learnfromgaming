document.addEventListener('DOMContentLoaded', () => {
    // Core Interface Elements
    const registerForm = document.getElementById('registerForm');
    const authWrapper = document.getElementById('authWrapper');
    const gameCanvasContainer = document.getElementById('gameCanvasContainer');
    const playerNameDisplay = document.getElementById('playerNameDisplay');
    
    // Select both logout buttons (navbar and game window)
    const logoutButtons = document.querySelectorAll('.btn-logout');
    
    // Random Game Page Button
    const randomGameBtn = document.getElementById('randomGameBtn');

    // --- 1. RANDOM GAME LOGIC ---
    if (randomGameBtn) {
        randomGameBtn.addEventListener('click', () => {
            const gamePages = [
                "https://vyncenzo0.github.io/learnfromgaming/games/pc-build-sim.html",
                "https://vyncenzo0.github.io/learnfromgaming/games/rj45-color-drag-&-drop.html",
            ];
            const randomIndex = Math.floor(Math.random() * gamePages.length);
            window.location.href = gamePages[randomIndex];
        });
    }

    // --- 2. CLIENT-SIDE REGISTRATION SIMULATION ---
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page reload
            
            const formData = new FormData(registerForm);
            const pilotName = formData.get('name');

            alert("Registration Matrix Accepted! Welcome Pilot.");
            
            // Instantly transition view to active game arena
            playerNameDisplay.textContent = `Pilot: ${pilotName}`;
            authWrapper.style.display = 'none';
            gameCanvasContainer.style.display = 'block';
            
            // Show logout buttons across the UI
            logoutButtons.forEach(btn => btn.style.display = 'inline-block');
        });
    }

    // --- 3. CLIENT-SIDE LOGOUT SYSTEM ---
    logoutButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            alert("Securely logged out from interface logs.");
            
            // Hide all logout options
            logoutButtons.forEach(btn => btn.style.display = 'none');
            
            // Return UI to base login frame
            gameCanvasContainer.style.display = 'none';
            authWrapper.style.display = 'block';
            registerForm.reset();
        });
    });
});