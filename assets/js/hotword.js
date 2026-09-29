// Exibe as hotwords acima de modais e contêineres com overflow.
function initHotwords() {
    document.querySelectorAll('.hotword-item').forEach(function (item) {
        const box = item.querySelector('.hotword-conteudo');
        const trigger = item.querySelector('.hotword');

        if (!box || !trigger || item.dataset.hotwordReady === 'true') return;
        item.dataset.hotwordReady = 'true';

        let timer;
        const closeDelay = 2500;
        const originalParent = box.parentNode;
        const originalNext = box.nextSibling;
        const hasHover = window.matchMedia('(hover: hover)').matches;

        function positionBox() {
            const rect = trigger.getBoundingClientRect();
            const margin = 16;
            const gap = 10;
            const boxWidth = Math.min(520, window.innerWidth - (margin * 2));
            const left = Math.min(
                Math.max(margin, rect.left),
                window.innerWidth - boxWidth - margin
            );

            box.style.position = 'fixed';
            box.style.left = left + 'px';
            box.style.width = boxWidth + 'px';
            box.style.maxWidth = 'calc(100vw - 32px)';
            box.style.maxHeight = 'calc(100vh - 32px)';
            box.style.overflowY = 'auto';
            box.style.zIndex = '999999';
            box.style.display = 'block';

            const boxHeight = Math.min(box.scrollHeight, window.innerHeight - (margin * 2));
            const fitsBelow = rect.bottom + gap + boxHeight <= window.innerHeight - margin;
            const top = fitsBelow
                ? rect.bottom + gap
                : Math.max(margin, rect.top - gap - boxHeight);

            box.style.top = top + 'px';
        }

        function closeBox() {
            clearTimeout(timer);
            box.style.display = 'none';
            box.removeAttribute('style');

            if (originalParent && box.parentNode !== originalParent) {
                originalParent.insertBefore(box, originalNext);
            }
        }

        function showBox(autoCloseDelay) {
            clearTimeout(timer);

            if (box.parentNode !== document.body) {
                document.body.appendChild(box);
            }

            positionBox();

            if (autoCloseDelay) {
                timer = setTimeout(closeBox, autoCloseDelay);
            }
        }

        function isOpen() {
            return box.parentNode === document.body && box.style.display === 'block';
        }

        if (hasHover) {
            item.addEventListener('mouseenter', function () {
                showBox();
            });

            item.addEventListener('mouseleave', function () {
                timer = setTimeout(closeBox, closeDelay);
            });

            box.addEventListener('mouseenter', function () {
                clearTimeout(timer);
            });

            box.addEventListener('mouseleave', function () {
                timer = setTimeout(closeBox, closeDelay);
            });
        }

        trigger.addEventListener('pointerdown', function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (event.pointerType === 'mouse' && hasHover) {
                showBox();
            } else if (isOpen()) {
                closeBox();
            } else {
                showBox(closeDelay);
            }
        });

        document.addEventListener('pointerdown', function (event) {
            if (isOpen() && !trigger.contains(event.target) && !box.contains(event.target)) {
                closeBox();
            }
        });

        window.addEventListener('scroll', function () {
            if (isOpen()) positionBox();
        });

        window.addEventListener('resize', function () {
            if (isOpen()) positionBox();
        });
    });
}

if (document.readyState !== 'loading') {
    initHotwords();
} else {
    document.addEventListener('DOMContentLoaded', initHotwords);
}
