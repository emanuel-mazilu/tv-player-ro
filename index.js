
// function that executes when the chanel link is clicked
// change the source for the video player and reload

function changeChannel(e){
    event.preventDefault();
    var link = e.target.href;
    var videoPlayer = videojs("my-video");
    videoPlayer.src({src: link})
    
}