const btn = document.querySelector("button");
const outputme = document.querySelector(".output-you");
const outputbot = document.querySelector(".output-bot");
const socket = io();

// 'SpeechRecognition' is an API which help browser get voice 
// Check if 'SpeechRecognition' is supported in the browser
// If not, it uses 'webkitSpeechRecognition' - older version of Chrome 
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Initialize
const recognition = new SpeechRecognition();

// Config language for recognition
recognition.lang = "en-US";
recognition.interimResults = false;

// Event when we click button
btn.addEventListener("click", () => {
    recognition.start();
});

// Resultes after we click button 
recognition.onresult = function (event) {
    const last = event.results.length - 1;
    const text = event.results[last][0].transcript;
    console.log(text);

    outputme.textContent = text;
    socket.emit("chat message", text); // Push the text to browser
}

