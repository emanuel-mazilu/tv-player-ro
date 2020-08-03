// function that executes when the chanel link is clicked
// change the source for the video player and reload

function changeChannel(e){
    event.preventDefault();
    // deactivate old button
    toggleActive(oldelement);
    // store current button
    oldelement = e.target;

    const link = e.target.href;
    const type = e.target.type;
    const videoPlayer = videojs("my-video");
    videoPlayer.src({src: link, type: type});
    // activate new button
    toggleActive(oldelement);
}