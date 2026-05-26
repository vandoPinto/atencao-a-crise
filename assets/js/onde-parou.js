$(document).ready(function () {

    const paginaID = window.location.pathname;
    const chaveScroll = "scroll_" + paginaID;

    // =========================
    // SALVA POSIÇÃO DO SCROLL
    // =========================
    function salvarScroll() {
        const posicao = $(window).scrollTop();

        localStorage.setItem(chaveScroll, JSON.stringify({
            scroll: posicao,
            data: new Date().getTime()
        }));
    }

    // Salva durante o scroll
    let timeoutScroll;

    $(window).on("scroll", function () {

        clearTimeout(timeoutScroll);

        timeoutScroll = setTimeout(function () {
            salvarScroll();
        }, 300);

    });

    // Salva antes de sair
    $(window).on("beforeunload", function () {
        salvarScroll();
    });

    // =========================
    // RECUPERA POSIÇÃO
    // =========================
    const dadosSalvos = localStorage.getItem(chaveScroll);

    if (dadosSalvos) {

        const dados = JSON.parse(dadosSalvos);

        // Só pergunta se tiver descido bastante
        if (dados.scroll > 300) {

            setTimeout(function () {

                const desejaVoltar = confirm(
                    "Você deseja continuar de onde parou?"
                );

                if (desejaVoltar) {

                    $("html, body").animate({
                        scrollTop: dados.scroll
                    }, 1200);

                }

            }, 800);

        }

    }

});