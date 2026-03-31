document.addEventListener("DOMContentLoaded", async () => {

    window.appLogic.checkAuth();
    
    const inputElement = document.getElementById("round3Input");
    const submitBtn = document.getElementById("submitRound3");
    const errorElement = document.getElementById("r3Error");
    const victoryBox = document.getElementById("finalVictory");
    const clueBox = document.querySelector(".clue-box");

    if (submitBtn) {
        submitBtn.addEventListener("click", async () => {
            const input = inputElement.value;
            
            if (!input) {
                errorElement.innerText = "Please enter the decoded payload.";
                return;
            }

            
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Analyzing Signal...";
            submitBtn.disabled = true;
            errorElement.innerText = "";

            try {
                const isValid = await window.dbApi.validateRound3Answer(input);
                
                if (isValid) {
                    
                    inputElement.classList.add("hidden");
                    submitBtn.classList.add("hidden");
                    clueBox.classList.add("hidden");
                    
                    victoryBox.innerText = "🏆 SYSTEM OVERRIDE COMPLETE 🏆\n\nTransmission verified. The hunt is over. Proceed to the final extraction point to claim your reward.";
                    victoryBox.classList.remove("hidden");
                } else {
                    errorElement.innerText = "Invalid payload. The signal translation is incorrect.";
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }
            } catch (error) {
                errorElement.innerText = "Validation error. Please try again.";
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});