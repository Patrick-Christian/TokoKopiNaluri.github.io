document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('welcomeModal');
    const closeBtn = document.querySelector('.close');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const welcomeMusic = document.getElementById('welcomeMusic');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    // Menampilkan modal saat halaman dimuat
    modal.style.display = "block";

    // Menggunakan kontrol untuk memutar musik
    playBtn.onclick = function() {
        welcomeMusic.play().catch(error => {
            console.log('Tidak dapat memutar musik:', error);
        });
    };

    pauseBtn.onclick = function() {
        welcomeMusic.pause();
    };

    // Menutup modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
        welcomeMusic.pause();
        welcomeMusic.currentTime = 0;
    };

    closeModalBtn.onclick = function() {
        modal.style.display = "none";
        welcomeMusic.pause();
        welcomeMusic.currentTime = 0;
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            welcomeMusic.pause();
            welcomeMusic.currentTime = 0;
        }
    };

    // Smooth scrolling untuk navigasi
    document.querySelector('nav').addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});
