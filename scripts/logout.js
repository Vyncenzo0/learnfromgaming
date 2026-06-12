<?php

header("Access-Control-Allow-Origin: https://github.io");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');


    if (logoutBtn) {
        logoutBtn.addEventListener('click', async (event) => {
            event.preventDefault();

            try {
                const response = await fetch('https://railway.app');
                
                if (!response.ok) {
                    throw new Error(`HTTP network error! Status: ${response.status}`);
                }

                const result = await response.json();

                if (result.status === 'success') {
                    handleLogoutSuccess();
                } else {
                    console.error('Logout failed on backend:', result.message);
                    alert('Could not complete logout. Please try again.');
                }

            } catch (error) {
                console.error('Network or parsing error during logout:', error);
                alert('A network connection error occurred. Are you offline?');
            }
        });
    }
});

function handleLogoutSuccess() {
    alert("You have logged out successfully!");

    window.location.href = 'signup.html'; 
}
