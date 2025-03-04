document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".drum");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            playSound(button.dataset.sound);
        });
    });

    document.addEventListener("keydown", (event) => {
        const button = document.querySelector(`.drum[data-key="${event.key.toUpperCase()}"]`);
        if (button) {
            playSound(button.dataset.sound);
        }
    });

    function playSound(soundPath) {
        if (soundPath) {
            const audio = new Audio(soundPath);
            audio.play();
        }
    }
});

