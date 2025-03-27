import { useState } from "react";

let localStream;

const setupDevice = () => {
    const navigate = useState()
    console.log('setupDevice invoke');
    navigator.getUserMedia({ audio: true, video: true }, (stream) => {
        const localPlayer = document.getElementById('localPlayer');
        localPlayer.srcObject = stream;
        localStream = stream;
    }, (error) => {
        console.error('GetUserMedia error', error);
    })
}

export default setupDevice