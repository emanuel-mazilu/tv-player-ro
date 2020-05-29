// function that executes when the chanel link is clicked
// change the source for the video player and reload

function changeChannel(e){
    event.preventDefault();
    const link = e.target.href;
    const videoPlayer = videojs("my-video");
    videoPlayer.src({src: link})
}