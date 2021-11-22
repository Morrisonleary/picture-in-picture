const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to selecte a media stream, pass tot video element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (e) {
        // catch error
        console.log('whoops, error here: ', e);
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
});

// On Load
selectMediaStream();
