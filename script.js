
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


document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    const iphoneVideo = document.getElementById('iphone-video');
    const iconGrid = document.getElementById('icon-grid');
    const homeButton = document.getElementById('home-button');

    // Define video sources for each icon
    const videoSources = {
        '2048.png': 'videos/2048.mp4',
        'BYV.png': 'videos/BYV.mp4',
        'DBS.png': 'videos/dbs.mp4',
        'SJ.png': 'videos/SJ1.mp4',
        'PC.png': 'videos/PC.mp4',
        'LBC.png': 'videos/lb1.mp4',
        'LINEUP.png': 'videos/lineup.mp4',
        'LOOPER.png': 'videos/LP.mp4',
        'LS.png': 'videos/LS.mp4',
        'GT.png': 'videos/GT.mp4',
        'TF.png': 'videos/TF.mp4',
        'drawit.png': 'videos/drawit.mp4',
        'CANDY.png': 'videos/CANDY.mp4',
        'SJ2.png': 'videos/SJ2.mp4',
        'PC2.png': 'videos/PCCUS.mp4',
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
