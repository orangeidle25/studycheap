window.onload = function() {
    const sloganText = document.getElementById('slogan-text');
    const startButton = document.getElementById('start-button');

    if (sloganText && startButton) {
        setTimeout(() => {
            sloganText.classList.add('float-up');
            startButton.classList.add('float-up');
        }, 1000);
    }
};
