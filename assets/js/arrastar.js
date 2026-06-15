let itemAtual = null;
let offsetX = 0;
let offsetY = 0;

let startX = 0;
let startY = 0;
let moveu = false;

let originalLeft = 0;
let originalTop = 0;

document.querySelectorAll('.ferramenta-arrastavel').forEach(item => {

    item.addEventListener('pointerdown', e => {

        e.preventDefault();

        itemAtual = item;
        moveu = false;

        startX = e.clientX;
        startY = e.clientY;

        item.classList.add('arrastando');

        const rect = item.getBoundingClientRect();

        originalLeft = rect.left;
        originalTop = rect.top;

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        item.style.transition = '';
        item.style.position = 'fixed';
        item.style.left = rect.left + 'px';
        item.style.top = rect.top + 'px';
        item.style.zIndex = '9999';

        item.setPointerCapture(e.pointerId);
    });

});

document.addEventListener('pointermove', e => {

    if (!itemAtual) return;

    const distancia =
        Math.abs(e.clientX - startX) +
        Math.abs(e.clientY - startY);

    if (distancia > 5) {
        moveu = true;
    }

    if (!moveu) return;

    itemAtual.style.left = (e.clientX - offsetX) + 'px';
    itemAtual.style.top = (e.clientY - offsetY) + 'px';
});

document.addEventListener('pointerup', e => {

    if (!itemAtual) return;

    const item = itemAtual;
    let acertou = false;

    if (moveu) {

        document.querySelectorAll('.area-drop').forEach(caixa => {

            const rect = caixa.getBoundingClientRect();

            const dentroDaCaixa =
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom;

            if (
                dentroDaCaixa &&
                caixa.dataset.caixa === item.dataset.caixa
            ) {

                acertou = true;

                item.style.display = 'none';

                const modal = document.querySelector(
                    item.dataset.bsTarget
                );

                if (modal) {

                    const modalInstance = new bootstrap.Modal(modal);

                    modal.querySelectorAll('[data-bs-dismiss="modal"]').forEach(botao => {
                        botao.addEventListener('click', () => {
                            modalInstance.hide();
                        }, { once: true });
                    });

                    modalInstance.show();

                    modal.addEventListener('hidden.bs.modal', function () {

                        if (document.activeElement) {
                            document.activeElement.blur();
                        }

                    });

                }
            }
        });
    }

    if (!acertou) {

        item.style.transition =
            'left .5s cubic-bezier(.22,1,.36,1), top .5s cubic-bezier(.22,1,.36,1)';

        item.style.left = originalLeft + 'px';
        item.style.top = originalTop + 'px';

        setTimeout(() => {

            item.style.transition = '';
            item.style.position = '';
            item.style.left = '';
            item.style.top = '';
            item.style.zIndex = '';

            item.classList.remove('arrastando');

        }, 500);

    } else {

        item.classList.remove('arrastando');
    }

    itemAtual = null;
    moveu = false;
});
