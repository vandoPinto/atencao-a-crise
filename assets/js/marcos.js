// Marca visualmente os pins do mapa de marcos que já foram visitados.
function initMarcosVisitados() {
    document.querySelectorAll('.mapa-img-offset .hotspot[data-bs-target]').forEach(function (pin) {
        const target = pin.getAttribute('data-bs-target');
        const modalNumber = Number((target || '').replace('#modal_', ''));

        if (modalNumber < 16 || modalNumber > 35) return;

        pin.addEventListener('click', function () {
            pin.classList.add('marco-visitado');
        });
    });
}

if (document.readyState !== 'loading') {
    initMarcosVisitados();
} else {
    document.addEventListener('DOMContentLoaded', initMarcosVisitados);
}
