window.addEventListener("load", () => {
    document.body.classList.remove("container");
});
const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

// Intentar reproducir automáticamente
window.addEventListener("load", () => {
    music.play()
        .then(() => {
            musicButton.textContent = "⏸️";
            musicButton.classList.add("playing");
        })
        .catch(() => {
            // El navegador bloqueó el autoplay.
            // Se iniciará al primer clic.
            musicButton.textContent = "🎵";
        });
});

// Botón de música
musicButton.addEventListener("click", (event) => {
    event.stopPropagation();

    if (music.paused) {
        music.play();
        musicButton.textContent = "⏸️";
        musicButton.classList.add("playing");
    } else {
        music.pause();
        musicButton.textContent = "🎵";
        musicButton.classList.remove("playing");
    }
});

// Si el navegador bloqueó el autoplay,
// comenzar con el primer clic en la página
document.addEventListener("click", () => {
    if (music.paused && music.currentTime === 0) {
        music.play()
            .then(() => {
                musicButton.textContent = "⏸️";
                musicButton.classList.add("playing");
            })
            .catch(() => {});
    }
}, { once: true });
