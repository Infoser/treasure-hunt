document.addEventListener("DOMContentLoaded", () => {
    
    const loginForm = document.getElementById("loginForm");
    const teamInput = document.getElementById("teamName");
    const passInput = document.getElementById("teamPassword");
    const errorText = document.getElementById("loginError");
    const submitBtn = loginForm.querySelector("button[type='submit']");

    
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault(); 

        const team = teamInput.value.trim();
        const pass = passInput.value.trim();

        
        submitBtn.innerText = "AUTHENTICATING...";
        submitBtn.disabled = true;
        errorText.innerText = ""; 

        try {
            
            const isValid = await window.dbApi.loginTeam(team, pass);

            
            if (isValid) {
                window.location.href = "round1.html";
            } else {
                
                errorText.innerText = "Invalid Team ID or Password.";
                submitBtn.innerText = "Continue";
                submitBtn.disabled = false;
            }
        } catch (error) {
            errorText.innerText = "Connection error. Try again.";
            submitBtn.innerText = "Continue";
            submitBtn.disabled = false;
        }
    });
});