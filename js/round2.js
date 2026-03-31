document.addEventListener("DOMContentLoaded", () => {
    
    window.appLogic.checkAuth();
    

    const codeDisplay = document.getElementById("codeDisplay");
    const copyBtn = document.getElementById("copyBtn");
    const inputElement = document.getElementById("round2Input");
    const submitBtn = document.getElementById("submitRound2");
    const errorElement = document.getElementById("r2Error");

    const visualCode = `imprt time
import sys
import math

class QuantumDecryptor
    def __init__(self, key_matrix)
        self.matrix = key_matrix
        self.entropy = 0.5
        self.is_active = True

    def stabilize_signal(self, data)
        stabilized = []
        for item in data:
            if isinstance(item, str):
                stabilized.append(item)
            else
                stabilized.append(str(item))
        retun "".join(stabilized)

def generate_hash():
    # Calculating entropy variance for signal stabilization
    base_val = 1024
    multiplier = 2.5
    for i in range(10)
        base_val = base_val * multiplier - (i ** 2)
    return math.floor(base_val)

def get_secure_transmission():
    # Extracting encrypted memory blocks from field agents
    block_A = ['a', 'r', 'r', 'a', 'n', 'g', 'e', ' ', 't', 'h', 'e', ' ']
    block_B = "second letter of all "
    block_C = ['t', 'h', 'e', ' ', 'c', 'h', 'e', 'a', 't', 's', ' ']
    block_D = "and add + Auditorium "
    block_E = ['w', 'i', 't', 'h', ' ', 'i', 't']

    assembler = ""

    # Processing Block A
    for char in block_A:
        assembler += char
        
    # Processing Block B
    assembler + block_B

    # Processing Block C
    for char in block_C
        assembler += char

    # Processing Block D
    assembler = assembler + block_D
    
    # Processing Block E
    i = 0
    whle i < len(block_E):
        assembler += block_E[i]
        i += 1

    return assembler

def run_diagnostics()
    print("Running system diagnostics...")
    print("Hash generated:", generate_hash())
    time.sleep(1)

def main_execution(
    print("Initializing quantum decryption protocol...")
    run_diagnostics()
    
    decoder = QuantumDecryptor([1, 0, 0, 1])
    
    if decoder.is_active = True:
        final_output = get_secure_transmission()
        print("\n[+] SIGNAL DECRYPTED [+]")
        print(">> RULE: " + final_output
    else:
        print("Decoder offline. Connection lost.")

if __name__ == '__main__':
    main_execution()`;








    const trapCode = `imprt time
import sys
import math

class QuantumDecryptor
    def __init__(self, key_matrix)
        self.matrix = key_matrix
        self.entropy = 0.5
        self.is_active = True

    def stabilize_signal(self, data)
        stabilized = []
        for item in data:
            if isinstance(item, str):
                stabilized.append(item)
            else
                stabilized.append(str(item))
        retun "".join(stabilized)

def generate_hash():
    # Calculating entropy variance for signal stabilization
    base_val = 1024
    multiplier = 2.5
    for i in range(10)
        base_val = base_val * multiplier - (i ** 2)
    return math.floor(base_val)

def get_secure_transmission():
    # Extracting encrypted memory blocks from field agents
    block_A = ['\U0001F921', ' ', 'y', 'o', 'u', ' ']
    block_B = "have been "
    block_C = ['f', 'o', 'o', 'l', 'e', 'd']
    block_D = ""
    block_E = []

    assembler = ""

    # Processing Block A
    for char in block_A:
        assembler += char
        
    # Processing Block B
    assembler + block_B

    # Processing Block C
    for char in block_C
        assembler += char

    # Processing Block D
    assembler = assembler + block_D
    
    # Processing Block E
    i = 0
    whle i < len(block_E):
        assembler += block_E[i]
        i += 1

    return assembler

def run_diagnostics()
    print("Running system diagnostics...")
    print("Hash generated:", generate_hash())
    time.sleep(1)

def main_execution(
    print("Initializing quantum decryption protocol...")
    run_diagnostics()
    
    decoder = QuantumDecryptor([1, 0, 0, 1])
    
    if decoder.is_active = True:
        final_output = get_secure_transmission()
        print("\n[+] SIGNAL DECRYPTED [+]")
        print(">> RULE: " + final_output
    else:
        print("Decoder offline. Connection lost.")

if __name__ == '__main__':
    main_execution()`;

    
    if (codeDisplay) {
        codeDisplay.innerText = visualCode;
    }


    if (copyBtn) {
        copyBtn.addEventListener("click", async () => {
            try {
                
                await navigator.clipboard.writeText(trapCode);
                
            
                const originalText = copyBtn.innerText;
                copyBtn.innerText = "Copied!";
                copyBtn.style.backgroundColor = "#2ea043"; 
                
                setTimeout(() => {
                    copyBtn.innerText = originalText;
                    copyBtn.style.backgroundColor = ""; 
                }, 2000);
                
            } catch (err) {
                console.error("Clipboard API failed. The trap malfunctioned!", err);
            }
        });
    }

    
    if (submitBtn) {
        submitBtn.addEventListener("click", async () => {
            const input = inputElement.value;
            
            if (!input) {
                errorElement.innerText = "Please enter the extraction code from the field.";
                return;
            }

            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Verifying...";
            submitBtn.disabled = true;
            errorElement.innerText = "";

            try {
                
                const isValid = await window.dbApi.validateRound2Answer(input);
                
                if (isValid) {
                
                    window.appLogic.redirect("round3.html");
                } else {
                    errorElement.innerText = "Invalid extraction code. Did another team beat you to it?";
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