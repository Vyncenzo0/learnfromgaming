document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Core Interface Containers
    const authWrapper = document.getElementById('authWrapper');
    const gameCanvasContainer = document.getElementById('gameCanvasContainer');
    const playerNameDisplay = document.getElementById('playerNameDisplay');

    const RAILWAY_SERVER_URL = "https://railway.app"; 

    // Intercept Registration Form Submit Actions
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Intercept browser navigation events
            
            const formData = new FormData(registerForm);

            try {
                const response = await fetch(`${RAILWAY_SERVER_URL}/register.php`, {
                    method: 'POST',
                    body: formData
                });

                const result = await response.text();

                if (response.ok) {
                    alert("Registration Matrix Accepted! Welcome Pilot.");
                    
                    // Seamless Game Canvas Reveal Layout State Animation shifts
                    const pilotName = formData.get('name');
                    playerNameDisplay.textContent = `Pilot: ${pilotName}`;
                    
                    authWrapper.style.display = 'none';
                    gameCanvasContainer.style.display = 'block';
                    logoutBtn.style.display = 'inline-block';
                } else {
                    alert(`Access Refused: ${result}`);
                }

            } catch (err) {
                console.error("Networking intercept failed:", err);
                alert("Network boundary interface error. Check Railway endpoint configurations.");
            }
        });
    }

    // Modern Background Logging Out Handlers
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async (e) => {
            e.preventDefault();

            try {
                const response = await fetch(`${RAILWAY_SERVER_URL}/logout.php?ajax=1`);
                
                if (response.ok) {
                    alert("Securely logged out from interface logs.");
                    
                    // Reset Global State Back to Base Authentication Panels
                    logoutBtn.style.display = 'none';
                    gameCanvasContainer.style.display = 'none';
                    authWrapper.style.display = 'block';
                    registerForm.reset();
                }
            } catch (error) {
                alert("Logout network frame synchronization missing.");
            }
        });
    }
});
