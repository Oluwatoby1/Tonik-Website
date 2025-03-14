let playVideo = document.getElementById("play")
let pauseVideo = document.getElementById("pause")
let tonikVideo = document.getElementById("tonik-video")
let videoContainer = document.getElementById("tonik-area")
// let faq = document.getElementById("accordion")
// let faqAns = document.getElementById("faq-ans")
// let openAns = document.getElementById("arrow-down")
// let closeAns = document.getElementById("arrow-up")

// let accordionQuestion = document.getElementById("faq-question")







function videoPlaying() {
   
    playVideo.style.display = "none";
    pauseVideo.style.display = "none"; 
    tonikVideo.play();
   
}
function videoPause() {
   
    playVideo.style.display = "flex";
    pauseVideo.style.display = "none"; 
    tonikVideo.pause();
   
}

playVideo.addEventListener("click", videoPlaying);
pauseVideo.addEventListener("click", videoPause)



function clickPlay() {
    if (tonikVideo.paused) {  
        tonikVideo.play(); // Play the video
        playVideo.style.display = "none"; // Hide play button
        pauseVideo.style.display = "none"; // Show pause button
    } else {  
        tonikVideo.pause(); // Pause the video
        playVideo.style.display = "flex"; // Show play button
        pauseVideo.style.display = "none"; // Hide pause button
    }
}
    

videoContainer.addEventListener("click", clickPlay)


document.querySelectorAll(".accordion").forEach((faq) => {
    let faqAns = faq.querySelector(".faq-ans");
    let openAns = faq.querySelector(".arrow-down");
    let closeAns = faq.querySelector(".arrow-up");
    let accordionQuestion = faq.querySelector(".faq-question");

    // Toggle FAQ when clicking on the question or arrow
    accordionQuestion.addEventListener("click", function () {
        if (faqAns.style.display === "none" || faqAns.style.display === "") {
            faqAns.style.display = "block";
            openAns.style.display = "none";
            closeAns.style.display = "block";
        } else {
            faqAns.style.display = "none";
            openAns.style.display = "block";
            closeAns.style.display = "none";
        }
    });
});
