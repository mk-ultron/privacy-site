document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.querySelector('.reveal-credits');
    const imageCredits = document.querySelectorAll('.image-credit');

    if (revealButton && imageCredits.length > 0) {
        revealButton.addEventListener('click', function() {
            imageCredits.forEach(credit => {
                credit.classList.remove('hidden');
            });
            this.style.display = 'none';
        });
    }
});
