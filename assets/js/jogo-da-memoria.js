document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-jogo-memoria]').forEach(iniciarJogoMemoria);
});

function iniciarJogoMemoria(jogo) {
    const tabuleiro = jogo.querySelector('[data-memoria-tabuleiro]');
    const overlay = jogo.querySelector('[data-memoria-overlay]');
    const modalTexto = jogo.querySelector('[data-memoria-modal-texto]');
    const fecharModal = jogo.querySelector('[data-memoria-fechar]');
    const cartas = [...tabuleiro.querySelectorAll('[data-memoria-carta]')];

    let primeiraCarta = null;
    let segundaCarta = null;
    let travado = false;
    let focoRetorno = null;

    tabuleiro.addEventListener('click', event => {
        const carta = event.target.closest('[data-memoria-carta]');

        if (!carta || !tabuleiro.contains(carta)) {
            return;
        }

        virarCarta(carta);
    });

    fecharModal.addEventListener('click', fecharBox);

    overlay.addEventListener('click', event => {
        if (event.target === overlay) {
            fecharBox();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && overlay.classList.contains('is-active')) {
            fecharBox();
        }
    });

    function virarCarta(carta) {
        if (travado || carta === primeiraCarta || carta.classList.contains('is-matched')) {
            return;
        }

        carta.classList.add('is-flipped');
        carta.setAttribute('aria-pressed', 'true');

        if (!primeiraCarta) {
            primeiraCarta = carta;
            return;
        }

        segundaCarta = carta;
        travado = true;

        if (primeiraCarta.dataset.memoriaPar === segundaCarta.dataset.memoriaPar) {
            confirmarPar();
            return;
        }

        setTimeout(desvirarPar, 900);
    }

    function confirmarPar() {
        primeiraCarta.classList.add('is-matched');
        segundaCarta.classList.add('is-matched');
        primeiraCarta.setAttribute('aria-disabled', 'true');
        segundaCarta.setAttribute('aria-disabled', 'true');
        focoRetorno = segundaCarta;

        const titulo = primeiraCarta.dataset.memoriaTitulo || 'Par encontrado';
        const texto = primeiraCarta.dataset.memoriaTexto || 'Texto deste par sera inserido depois.';

        limparSelecao();
        setTimeout(() => abrirBox(titulo, texto), 360);
    }

    function desvirarPar() {
        primeiraCarta.classList.remove('is-flipped');
        segundaCarta.classList.remove('is-flipped');
        primeiraCarta.setAttribute('aria-pressed', 'false');
        segundaCarta.setAttribute('aria-pressed', 'false');
        limparSelecao();
    }

    function limparSelecao() {
        primeiraCarta = null;
        segundaCarta = null;
        travado = false;
    }

    function abrirBox(titulo, texto) {
        modalTexto.innerHTML = `<strong>${titulo}: </strong>${texto}`;
        overlay.classList.add('is-active');
        overlay.setAttribute('aria-hidden', 'false');
        fecharModal.focus();
    }

    function fecharBox() {
        overlay.classList.remove('is-active');
        overlay.setAttribute('aria-hidden', 'true');

        if (focoRetorno) {
            focoRetorno.focus();
            focoRetorno = null;
        }
    }
}
