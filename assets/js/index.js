$(document).ready(function () {

    /* Fullscreen */
    $(".fullscreen-enter").click(
        function () {
            document.documentElement.requestFullscreen().catch((e) => {
                console.log(e);
            });
        }
    )
    $(".fullscreen-exit").click(
        function () {
            if (document.exitFullscreen)
                document.exitFullscreen();
            else if (document.mozCancelFullScreen)
                document.mozCancelFullScreen();
            else if (document.webkitExitFullscreen)
                document.webkitExitFullscreen();
            else if (document.msExitFullscreen)
                document.msExitFullscreen();
        }
    )

    // /* Audios */

    // /* Elementos de áudio */
    // let D1_A1 = document.getElementById("D1_A1");
    // let D1_A1_Mobile = document.getElementById("D1_A1_Mobile");

    // /* Captura de cliques de áudio */

    // $('#btnD1_A1').on('click', function () {
    //     if(D1_A1.paused){
    //         playAudio(D1_A1);
    //     } else{
    //         pauseAudio(D1_A1);
    //     }
    // });
    // $('#btnD1_A1_Mobile').on('click', function () {
    //     if(D1_A1_Mobile.paused){
    //         playAudio(D1_A1_Mobile);
    //     } else{
    //         pauseAudio(D1_A1_Mobile);
    //     }
    // });

    // /* Funções de play/pause */
    // function playAudio(element) {
    //     console.log('element',element.id)
    //     if(element.paused){
    //         element.play();
    //         $('#btn'+element.id+'_Img').attr("src","recursos/icones/icon-pause-spot.svg");
    //         $('#btn'+element.id+'_Text').html('pause');
    //         $('#btn'+element.id+'').toggleClass('col-player col-player-playing');
    //     }
    // }
    // function pauseAudio(element) {
    //     element.pause();
    //     $('#btn'+element.id+'_Img').attr("src","recursos/icones/icone_07.svg");
    //     $('#btn'+element.id+'_Text').html('play');
    //     $('#btn'+element.id+'').toggleClass('col-player col-player-playing');
    // }

    /* Accordion*/
    /* D4_C1 */
    $('#accordionD1_C1').click(function () {
        $('#btnCollapseDetachD4_C1').toggleClass('fa-angle-down fa-angle-up');
    });
    /* D2_C1 */
    $('#accordionD2_C1').click(function () {
        $('#accordionD2_C1 .click-down').toggleClass('hide-class');
        if ($('#accordionD2_C1 .click-down').hasClass('hide-class')) {
            $('.square p').removeAttr('hidden');
            $('.square i').removeAttr('hidden');
        } else {
            $('.square p').attr("hidden", true);
            $('.square i').attr("hidden", true);
        }
    });
    $('[id^="accordionD2_C"]').click(function () {
        const $this = $(this); // O acordeão clicado
        const collapseId = $this.find('.collapse').attr('id'); // ID do painel colapsável associado

        // Alterna a classe na div com "square-end-15"
        $this.find('.square-end-15').toggleClass('hide-class');

        // Verifica se o painel está aberto e ajusta os atributos de elementos internos
        if (!$(`#${collapseId}`).hasClass('show')) {
            $this.find('.click-down').attr("hidden", true);
            $this.find('.square-detach-15').attr("hidden", true);
        } else {
            $this.find('.click-down').attr("hidden", false);
            $this.find('.square-detach-15').attr("hidden", false);
        }
    });

    // Impede que links dentro do acordeão fechem o painel
    $('[id^="accordionD2_C"] a').click(function (event) {
        event.stopPropagation(); // Impede o evento de clique de se propagar para o acordeão
    });

    /* TollTip*/
    $(function () {
        $('[data-toggle="tooltip"]').tooltip(
            {
                delay: { "show": 0, "hide": 2000 },
                trigger: 'hover'

            });
        var tempToolTip = $('[data-toggle="tooltip"]');
        tempToolTip.hover(function () {
            tempToolTip.not(this).tooltip('hide');
            $(this).tooltip('show');
        });
    });

});

// Revelar respostas - Accordion

var acc = document.getElementsByClassName("accordion_container-detach-3");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}



// Podcast 2

document.addEventListener('DOMContentLoaded', () => {

    // Selecionar todos os containers de players
    const players = document.querySelectorAll('.podcast-container');


    players.forEach(player => {
        // Selecionar elementos necessários do player
        const audio = player.querySelector('.audio-element');
        const playPauseBtn = player.querySelector('.play-pause-btn');

        const barraProgress = player.querySelector('.progress-bar');

        // Verificar se todos os elementos existem
        if (!audio || !playPauseBtn || !barraProgress) {
            console.error('Elementos ausentes em um player:', player);
            return; // Ignorar este player
        }

        // Atualizar barra de progresso
        audio.addEventListener('timeupdate', () => {
            const progress = (audio.currentTime / audio.duration) * 100;
            barraProgress.value = progress;

            // Atualiza a cor da barra com gradiente
            barraProgress.style.background = `linear-gradient(to right, red ${progress}%, #ccc ${progress}%)`;
        });

        // Inicializar a barra de progresso com gradiente
        barraProgress.style.background = `linear-gradient(to right, red 0%, #ccc 0%)`;

        // Atualizar a posição do áudio ao mover a barra
        barraProgress.addEventListener('input', () => {
            audio.currentTime = (barraProgress.value / 100) * audio.duration;

            // Atualiza a cor da barra com gradiente ao mover manualmente
            const progress = barraProgress.value;
            barraProgress.style.background = `linear-gradient(to right, red ${progress}%, #ccc ${progress}%)`;
        });

        // Alternar entre Play e Pause
        playPauseBtn.addEventListener('click', () => {

            if (audio.paused) {
                // Pausar todos os outros players
                players.forEach(otherPlayer => {
                    const otherAudio = otherPlayer.querySelector('.audio-element');
                    const otherBtn = otherPlayer.querySelector('.play-pause-btn');
                    if (otherAudio && otherAudio !== audio) {
                        otherAudio.pause();
                        if (otherBtn) otherBtn.textContent = '▶';
                    }
                });

                audio.play();
                playPauseBtn.textContent = '❚❚'; // Ícone de pause
            } else {
                audio.pause();
                playPauseBtn.textContent = '▶'; // Ícone de play
            }
        });
    });
});

// tooltip

$(document).ready(function () {
    // Inicializa as tooltips com opções de atraso
    $('[data-toggle="tooltip"]').tooltip({
        delay: { "show": 0, "hide": 100 } // Controla a velocidade de entrada e saída
    });
});

// Audio

//     initPlayers(jQuery('[id^=player-container]').length);
//     $(document).ready(function(){
//         setTimeout('$("#ano1").addClass("load")', 200);
//   });