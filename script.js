
console.log("HEY YOU CURIOUS DETECTIVE, AS YOU ARE LOOKING UNDER THE HOOD WHY DONT YOU DROP ME AN EMAIL SO WE CAN HAVE A CHAT ;)")

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });3
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("hero-video");
    const unmuteButton = document.getElementById("unmute-button");

    // Unmute video when the button is clicked
    unmuteButton.addEventListener("click", () => {
        if (video.muted) {
            video.muted = false;
            unmuteButton.style.opacity = 0;
            video.play(); // Ensure video continues playing with audio
            console.log("Audio enabled");
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
  
    const icons = document.querySelectorAll('.icon');
    const iphoneVideo = document.getElementById('iphone-video');
    const iconGrid = document.getElementById('icon-grid');
    const homeButton = document.getElementById('home-button');

    // Define video sources for each icon
    const videoSources = {
        '2048.png': '2048.mp4',
        'BYV.png': '22.mp4',
        'DBS.png': 'dbs.mp4',
        'SJ.png': 'SJ1.mp4',
        'PC.png': 'PC.mp4',
        'LBC.png': 'lb1.mp4',
        'LINEUP.png': 'lineup.mp4',
        'LOOPER.png': 'LP.mp4',
        'LS.png': 'LS.mp4',
        'GT.png': 'GT.mp4',
        'TF.png': 'TF.mp4',
        'drawit.png': 'DRAWIT.mp4',
        'CANDY.png': 'CANDY.mp4',
        'SJ2.png': 'SJ2.mp4',
        'PC2.png': 'PCCUS.mp4',
    };

    // When an icon is clicked
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            const imgSrc = icon.getAttribute('src').split('/').pop(); // Get the image file name
            const videoSrc = videoSources[imgSrc]; // Get the corresponding video source

            if (videoSrc) {
                // Update video source and play
                iphoneVideo.querySelector('source').setAttribute('src', videoSrc);
                iphoneVideo.load(); // Reload the video element to apply the new source
                iphoneVideo.play();
            }

            // Hide the icon grid and show the video
            iconGrid.classList.add('hidden');
            iphoneVideo.classList.remove('hidden');
            homeButton.classList.remove('hidden');
        });
    });

    // When the home button is clicked
    homeButton.addEventListener('click', () => {
        // Stop the video
        iphoneVideo.pause();
        iphoneVideo.currentTime = 0;
        // Hide the video and show the icon grid
        iphoneVideo.classList.add('hidden');
        homeButton.classList.add('hidden');
        iconGrid.classList.remove('hidden');
    });
});

window.addEventListener('load', function() {
    const progressBar = document.getElementById('progress-bar');
    const loadingContainer = document.getElementById('loading-container');
    const loadingText = document.getElementById('loading-text');
    const video = document.getElementById("hero-video");


    let progress = 0;
    const interval = setInterval(() => {
        progress += 2; // Increase by 2 percent each time
        progressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            loadingText.textContent = 'Loaded!';
            setTimeout(() => {
                video.currentTime = 0;
                video.play();
                loadingContainer.style.display = 'none'; // Hide loading container after loading is complete

            }, 1000);
        }
    }, 100); // Update progress every 100ms
});

