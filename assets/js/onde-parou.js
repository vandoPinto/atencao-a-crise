$(document).ready(function () {

    const paginaID = window.location.pathname;
    const chaveScroll = "scroll_" + paginaID;
    const chaveNaoMostrar = "naoMostrarRetorno_" + paginaID;

    const DIAS_OCULTAR = 10;
    const MILIS_DIA = 1000 * 60 * 60 * 24;

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

    const dataOcultar = localStorage.getItem(chaveNaoMostrar);

    let podeMostrarModal = true;

    if (dataOcultar) {

        const diasPassados =
            (Date.now() - parseInt(dataOcultar)) / MILIS_DIA;

        if (diasPassados < DIAS_OCULTAR) {

            podeMostrarModal = false;

        } else {

            // Já passaram 10 dias, remove a restrição
            localStorage.removeItem(chaveNaoMostrar);

        }

    }

    if (
        dadosSalvos &&
        podeMostrarModal
    ) {

        const dados = JSON.parse(dadosSalvos);

        // Só pergunta se tiver descido bastante
        if (dados.scroll > 300) {

            setTimeout(function () {

                $("#modal-retorno")
                    .fadeIn(300)
                    .css("display", "flex");

            }, 800);

        }

    }

    // =========================
    // BOTÃO SIM
    // =========================
    $("#btn-retorno-sim").on("click", function () {

        const dados = JSON.parse(
            localStorage.getItem(chaveScroll)
        );

        if ($("#nao-mostrar-novamente").is(":checked")) {

            localStorage.setItem(
                chaveNaoMostrar,
                Date.now().toString()
            );

        }

        $("#modal-retorno").fadeOut(300);

        if (dados) {

            $("html, body").animate({
                scrollTop: dados.scroll
            }, 1200);

        }

    });

    // =========================
    // BOTÃO NÃO
    // =========================
    $("#btn-retorno-nao").on("click", function () {

        if ($("#nao-mostrar-novamente").is(":checked")) {

            localStorage.setItem(
                chaveNaoMostrar,
                Date.now().toString()
            );

        }

        $("#modal-retorno").fadeOut(300);

    });

    // Rode no console para voltar a funcionar o ponto onde parou, caso tenha sido desativado 
    // e queira que volte a aparecer.
    //localStorage.clear();
});