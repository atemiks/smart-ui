
function getVideos() {
    let videoContainers = document.querySelectorAll('.video-block');

    for(let i = 0; i < videoContainers.length; i++) {
        initialVideo(videoContainers[i]);
    }
}


function initialVideo(videoContainer) {
    let videoIframe = videoContainer.querySelector('.video-iframe'),
        videoIframeLink = videoIframe.getAttribute('data-src'),
        videoMedia = videoContainer.querySelector('.video-media'),
        videoButton = videoContainer.querySelector('.video-play');

    videoContainer.addEventListener('click', function() {
        videoIframe.setAttribute('src', videoIframeLink + '?rel=0&showinfo=0&autoplay=1&mute=1');
        videoMedia.remove();
        videoButton.remove();
    });
}

getVideos();