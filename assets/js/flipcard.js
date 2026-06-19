(function () {
    document.querySelectorAll('[data-flipcard]').forEach(function (card) {
        var front = card.querySelector('[data-flipcard-front]');
        var back = card.querySelector('[data-flipcard-back]');
        var backInteractive = Array.prototype.slice.call(card.querySelectorAll('[data-flipcard-back] a, [data-flipcard-back] button'));
        var labelFront = card.dataset.labelFront || 'Virar card';
        var labelBack = card.dataset.labelBack || labelFront;

        backInteractive.forEach(function (element) {
            element.dataset.flipcardOriginalTabindex = element.getAttribute('tabindex') || '';
        });

        function setFlipped(isFlipped) {
            card.classList.toggle('is-flipped', isFlipped);
            card.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
            card.setAttribute('aria-expanded', isFlipped ? 'true' : 'false');
            card.setAttribute('aria-label', isFlipped ? labelBack : labelFront);

            if (front) {
                front.setAttribute('aria-hidden', isFlipped ? 'true' : 'false');
            }

            if (back) {
                back.setAttribute('aria-hidden', isFlipped ? 'false' : 'true');
            }

            backInteractive.forEach(function (element) {
                var originalTabindex = element.dataset.flipcardOriginalTabindex;

                if (isFlipped) {
                    if (originalTabindex) {
                        element.setAttribute('tabindex', originalTabindex);
                    } else {
                        element.removeAttribute('tabindex');
                    }

                    return;
                }

                element.setAttribute('tabindex', '-1');
            });
        }

        function toggleCard() {
            setFlipped(!card.classList.contains('is-flipped'));
        }

        card.addEventListener('click', function (event) {
            if (event.target.closest && event.target.closest('a')) {
                return;
            }

            toggleCard();
        });

        card.addEventListener('keydown', function (event) {
            if (event.key !== 'Enter' && event.key !== ' ') {
                return;
            }

            event.preventDefault();
            toggleCard();
        });

        setFlipped(card.classList.contains('is-flipped'));
    });
}());
