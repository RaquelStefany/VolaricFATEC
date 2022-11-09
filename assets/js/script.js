const myVideo = document.getElementById('my-video');
// Not all browsers return promise from .play().
const playPromise = myVideo.play() || Promise.reject('');
playPromise.then(() => {
    // Video could be autoplayed, do nothing.
}).catch(err => {
    // Video couldn't be autoplayed because of autoplay policy. Mute it and play.
    myVideo.muted = true;
    myVideo.play();
});