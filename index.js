function changeChannel(e){
    event.preventDefault();
    var link = e.target.href;
    var videoPlayer = videojs("my-video");
    videoPlayer.src({src: link})
}