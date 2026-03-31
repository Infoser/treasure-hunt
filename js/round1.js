document.addEventListener("DOMContentLoaded", async () => {

    window.appLogic.checkAuth();
    
    
    const teamId = window.dbApi.getTeamId();
    
    
    const errorElement = document.getElementById("r1Error");
    const displayElement = document.getElementById("encryptedDataDisplay");
    const submitBtn = document.getElementById("submitRound1");
    const inputElement = document.getElementById("round1Input");

    try {
        
        const clueData = await window.dbApi.getRound1Clue(teamId);
        
        
        if (displayElement) {
            displayElement.innerText = `[ ${clueData.join(", ")} ]`;
        }

        
        console.log(
            "%c🚨 SYSTEM DIAGNOSTICS: MESSAGE INTERCEPTED 🚨", 
            "color: #ff4d4d; font-size: 20px; font-weight: bold; background: #0d1117; padding: 10px; border: 1px solid #ff4d4d;"
        );
        console.log(
            `%cTo the dev reading this: The data packet on the screen is secured using a Bitwise XOR cipher. The decryption key is ${clueData.xorKey}.`, 
            "color: #7ee787; font-size: 14px; background: #0d1117; padding: 5px; border: 1px solid #30363d;"
        );

    } catch (error) {
        console.error("Failed to load clue from Firebase", error);
        errorElement.innerText = "Error establishing secure connection. Try reloading.";
    }

    
    submitBtn.addEventListener("click", async () => {
        const input = inputElement.value;
        
        if (!input) {
            errorElement.innerText = "Please enter a code.";
            return;
        }

        
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Verifying...";
        submitBtn.disabled = true;
        errorElement.innerText = ""; 

        try {
            
            const isValid = await window.dbApi.validateRound1Code(input, teamId);
            
            if (isValid) {
                
                await window.dbApi.saveRound1Time(teamId);
                window.appLogic.redirect("round2.html");
            } else {
                
                errorElement.innerText = "Invalid code. The physical link is missing.";
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        } catch (error) {
            errorElement.innerText = "Database error. Please try again.";
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
        
    });
});