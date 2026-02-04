/*************************************************
 * MATRIX BACKGROUND
 *************************************************/
const matrixBg = document.getElementById("matrixBg");
const matrixChars = "アァカサタナハマヤャラワン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function createMatrixChar() {
    const char = document.createElement("div");
    char.className = "matrix-char";
    char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
    char.style.left = Math.random() * 100 + "vw";
    char.style.fontSize = Math.random() * 12 + 12 + "px";
    char.style.animationDuration = Math.random() * 5 + 3 + "s";

    matrixBg.appendChild(char);

    setTimeout(() => {
        char.remove();
    }, 8000);
}

setInterval(createMatrixChar, 120);


/*************************************************
 * SCREEN NAVIGATION
 *************************************************/
function showNextScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}


/*************************************************
 * BOOT SEQUENCE TYPING
 *************************************************/
const bootLines = [
    "Initializing heart.exe...",
    "Loading emotions... ██████████ 100%",
    "Checking compatibility...",
    "Compatible ✔",
    "Locating you...",
    "Found ❤️",
    "",
    "System Ready."
];

const bootText = document.getElementById("bootText");

function typeBootText(lines, index = 0) {
    if (index >= lines.length) {
        setTimeout(() => showNextScreen("codeScreen"), 1200);
        return;
    }

    let line = lines[index];
    let charIndex = 0;
    const lineDiv = document.createElement("div");
    bootText.appendChild(lineDiv);

    const typing = setInterval(() => {
        lineDiv.textContent += line.charAt(charIndex);
        charIndex++;
        if (charIndex >= line.length) {
            clearInterval(typing);
            setTimeout(() => typeBootText(lines, index + 1), 400);
        }
    }, 40);
}

typeBootText(bootLines);


/*************************************************
 * CODE COMPILATION
 *************************************************/
const codeBlock = document.getElementById("codeBlock");

const codeText = `function myHeart() {
  let feelings = true;
  let thoughts = "only you";
  
  while (feelings) {
    love++;
  }
}

export default myHeart;`;

function compileCode() {
    codeBlock.textContent = "";
    let i = 0;

    const typing = setInterval(() => {
        codeBlock.textContent += codeText.charAt(i);
        i++;
        if (i >= codeText.length) {
            clearInterval(typing);
            setTimeout(() => showNextScreen("gitScreen"), 1000);
        }
    }, 25);
}


/*************************************************
 * DEBUG CONSOLE
 *************************************************/
const debugConsole = document.getElementById("debugConsole");

const debugLines = [
    "Breakpoint hit at feelings.js:143",
    "Inspecting variables...",
    "love = Infinity",
    "reason = 'you'",
    "No errors found.",
    "Proceeding..."
];

function runDebugger(index = 0) {
    if (index >= debugLines.length) return;

    const line = document.createElement("div");
    line.textContent = debugLines[index];
    debugConsole.appendChild(line);

    setTimeout(() => runDebugger(index + 1), 500);
}

document.getElementById("debugScreen")?.addEventListener("click", () => {
    runDebugger();
});


/*************************************************
 * API REQUEST SIMULATION
 *************************************************/
function sendApiRequest() {
    const btn = document.getElementById("sendApiBtn");
    const response = document.getElementById("apiResponse");

    btn.disabled = true;
    btn.innerHTML = "Sending...";

    setTimeout(() => {
        response.innerHTML = `
            <div class="success-response">
                💖 200 OK<br>
                Response: <strong>YES POSSIBLE</strong>
            </div>
        `;
        setTimeout(() => showNextScreen("proposalScreen"), 1500);
    }, 2500);
}


/*************************************************
 * PROPOSAL LOGIC
 *************************************************/
const noBtn = document.getElementById("noBtn");
const hint = document.getElementById("hint");

function moveNoButton() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 100 - 50;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    hint.textContent = "👀 That option seems buggy...";
}

function handleNo() {
    hint.textContent = "⚠️ Warning: This action is not supported.";
}

function handleYes() {
    showNextScreen("successScreen");
    startSuccessOutput();
}


/*************************************************
 * SUCCESS OUTPUT
 *************************************************/
const successOutput = document.getElementById("successOutput");

const successLines = [
    "Deploying relationship...",
    "Installing hugs...",
    "Configuring kisses...",
    "Setting future = together;",
    "",
    "❤️ SUCCESS ❤️"
];

function startSuccessOutput(index = 0) {
    if (index >= successLines.length) return;

    const line = document.createElement("div");
    line.textContent = successLines[index];
    successOutput.appendChild(line);

    setTimeout(() => startSuccessOutput(index + 1), 600);
}
