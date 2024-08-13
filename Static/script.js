const video = document.getElementById('video');
const startButton = document.getElementById('start-button');
const muteButton = document.getElementById('mute-button');
const chatButton = document.getElementById('chat-button');
const statusElement = document.querySelector('.status');

// Start video stream
function startVideoStream() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error("Error accessing the camera: ", err);
        });
}

// Function to start the interview
function startInterview() {
    startVideoStream();
    startButton.style.display = 'none';
    statusElement.textContent = 'Interview started. Please answer the questions.';
    // Add any additional logic to start the interview here
}

// Mute button functionality
muteButton.addEventListener('click', () => {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? '🔈' : '🔇';
});

// Chat button functionality
chatButton.addEventListener('click', () => {
    // Add chat functionality here
});

startButton.addEventListener('click', startInterview);
