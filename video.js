document.addEventListener("DOMContentLoaded", function() {

    const thevideo = document.getElementById("thevideo");
    const othervideo = document.getElementById("othervideo");
    const mobilevideo = document.getElementById("mobilevideo");
    const mobilemainvideo = document.getElementById("mobilemainvideo");
    const h1 = document.getElementById("h1");
    const p1 = document.getElementById("p1");

    const backh1 = h1.textContent;
    const backp1 = p1.textContent;

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    function isPortrait() {
        return isMobile() && window.matchMedia("(orientation: portrait)").matches;
    }
    
    function initMobileVideo() {
        thevideo.style.display = "none";
        mobilemainvideo.style.display = "block";
        mobilemainvideo.play();
    }

    

    // m
    if (isMobile()) {
        initMobileVideo();
    } else {
        thevideo.style.display = "block";
        thevideo.play();
    }


    
});