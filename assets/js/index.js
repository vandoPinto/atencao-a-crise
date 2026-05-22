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


// Podcast (player + menu de velocidade + wave como barra de progresso clicável)
function initAudioPlayers() {
  const buttons = document.querySelectorAll(".audio-bubble");
  if (!buttons.length) return;

  const players = [];
  const RATES = [0.75, 1, 1.5, 2];

  function formatTime(sec) {
    if (!isFinite(sec) || isNaN(sec) || sec < 0) return "00:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    const mm = m < 10 ? "0" + m : "" + m;
    const ss = s < 10 ? "0" + s : "" + s;
    return `${mm}:${ss}`;
  }

  function setPlayingUI(player, isPlaying) {
    if (isPlaying) player.btn.classList.add("playing");
    else player.btn.classList.remove("playing");
  }

  function closeAllSpeedMenus() {
    players.forEach(p => {
      if (p.speedWrap) {
        p.speedWrap.dataset.open = "0";
        if (p.speedMenu) p.speedMenu.setAttribute("aria-hidden", "true");
      }
    });
  }

  // fecha menus ao clicar fora + ESC (idempotente)
  if (!document.documentElement.dataset.audioSpeedGlobalInit) {
    document.documentElement.dataset.audioSpeedGlobalInit = "1";

    document.addEventListener("click", (e) => {
      const insideSpeed = e.target.closest(".audio-speed-wrap");
      if (!insideSpeed) closeAllSpeedMenus();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAllSpeedMenus();
    });
  }

  function buildWave(waveEl, barsCount = 44) {
    if (!waveEl || waveEl.dataset.waveBuilt === "1") return [];

    let html = `<span class="wave-bars">`;
    for (let i = 0; i < barsCount; i++) html += `<i></i>`;
    html += `</span>`;
    waveEl.innerHTML = html;

    const bars = Array.from(waveEl.querySelectorAll(".wave-bars i"));

    // desenha alturas iniciais e configura animação “wave” com delays diferentes
    bars.forEach((bar, i) => {
      const h = 6 + Math.floor(Math.random() * 18); // 6..23
      const d = (i * 35) % 700;                     // delay espalhado
      const dur = 650 + ((i * 37) % 550);           // duração variada

      bar.style.height = `${h}px`;
      bar.style.animationDelay = `${d}ms`;
      bar.style.animationDuration = `${dur}ms`;
    });

    waveEl.dataset.waveBuilt = "1";
    return bars;
  }

  function setWaveProgress(player, progress01) {
    const waveBars = player.waveBars;
    if (!waveBars || !waveBars.length) return;

    const p = Math.max(0, Math.min(1, progress01 || 0));
    const total = waveBars.length;

    // índice de barras “tocadas”
    const playedCount = Math.floor(p * total);

    // otimização: só atualiza quando mudar
    if (playedCount === player.lastPlayedCount) return;
    const prev = player.lastPlayedCount;

    // se avançou, marca as novas como played
    if (playedCount > prev) {
      for (let i = prev; i < playedCount; i++) {
        if (waveBars[i]) waveBars[i].classList.add("is-played");
      }
    } else {
      // se voltou, desmarca as que deixaram de estar played
      for (let i = playedCount; i < prev; i++) {
        if (waveBars[i]) waveBars[i].classList.remove("is-played");
      }
    }

    player.lastPlayedCount = playedCount;
  }

  buttons.forEach(btn => {
    // Idempotência pra SPA
    if (btn.dataset.audioInit === "1") return;
    btn.dataset.audioInit = "1";

    const audioId = btn.getAttribute("data-audio");
    const audio = document.getElementById(audioId);
    if (!audio) return;

    if (!audio.getAttribute("preload")) audio.setAttribute("preload", "metadata");

    const timeStart = btn.querySelector(".audio-time-start");
    const timeEnd = btn.querySelector(".audio-time-end");

    // wave
    const waveEl = btn.querySelector(".audio-wave");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const waveBars = buildWave(waveEl, isMobile ? 14 : 23);

    // velocidade
    const speedWrap = btn.querySelector(".audio-speed-wrap");
    const speedTrigger = btn.querySelector(".audio-speed-trigger");
    const speedLabel = btn.querySelector(".audio-speed-label");
    const speedMenu = btn.querySelector(".audio-speed-menu");
    const speedItems = btn.querySelectorAll(".audio-speed-item");

    // default 1x
    audio.playbackRate = 1;
    if (speedLabel) speedLabel.textContent = "1x";

    function markSelectedRate(rate) {
      speedItems.forEach(item => {
        const r = parseFloat(item.dataset.rate);
        item.classList.toggle("is-selected", r === rate);
      });
    }
    markSelectedRate(1);

    const player = {
      btn, audio, timeStart, timeEnd,
      speedWrap, speedMenu,
      waveEl, waveBars,
      lastPlayedCount: 0
    };
    players.push(player);

    // inicia progresso 0
    setWaveProgress(player, 0);

    function updateDuration() {
      if (!timeEnd) return;
      const dur = audio.duration;
      if (isFinite(dur) && !isNaN(dur) && dur > 0) {
        timeEnd.textContent = formatTime(dur);
      }
    }

    function updateCurrentTimeAndProgress() {
      if (timeStart) timeStart.textContent = formatTime(audio.currentTime);

      const dur = audio.duration;
      if (isFinite(dur) && dur > 0) {
        setWaveProgress(player, audio.currentTime / dur);
      } else {
        setWaveProgress(player, 0);
      }
    }

    audio.addEventListener("loadedmetadata", () => {
      if (timeStart) timeStart.textContent = "00:00";
      updateDuration();
      updateCurrentTimeAndProgress();
    });

    audio.addEventListener("durationchange", () => {
      updateDuration();
      updateCurrentTimeAndProgress();
    });

    audio.addEventListener("timeupdate", updateCurrentTimeAndProgress);

    audio.addEventListener("play", () => setPlayingUI(player, true));
    audio.addEventListener("pause", () => setPlayingUI(player, false));

    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
      player.lastPlayedCount = 0;
      // limpa tudo
      player.waveBars?.forEach(b => b.classList.remove("is-played"));
      updateCurrentTimeAndProgress();
      setPlayingUI(player, false);
    });

    function pauseOthers(currentAudio) {
      players.forEach(p => {
        if (p.audio !== currentAudio) {
          if (!p.audio.paused) p.audio.pause();
          setPlayingUI(p, false);
        }
      });
    }

    // PLAY/PAUSE: ignora cliques na velocidade e na wave (a wave agora é seek)
    btn.addEventListener("click", (e) => {
      if (e.target.closest(".audio-speed-wrap")) return;
      if (e.target.closest(".audio-wave")) return;

      closeAllSpeedMenus();
      pauseOthers(audio);

      if (audio.paused) {
        const pr = audio.play();
        if (pr && typeof pr.catch === "function") {
          pr.catch(() => setPlayingUI(player, false));
        }
        updateDuration();
      } else {
        audio.pause();
      }
    });

    // SEEK na wave (click + drag)
    if (waveEl) {
      let seeking = false;

      const seekFromPointer = (clientX) => {
        const dur = audio.duration;
        if (!isFinite(dur) || dur <= 0) return;

        const rect = waveEl.getBoundingClientRect();
        const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
        const p = rect.width ? (x / rect.width) : 0;

        audio.currentTime = p * dur;

        // atualiza UI imediatamente
        if (timeStart) timeStart.textContent = formatTime(audio.currentTime);
        setWaveProgress(player, p);
      };

      waveEl.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        e.stopPropagation();

        seeking = true;
        waveEl.setPointerCapture?.(e.pointerId);
        seekFromPointer(e.clientX);
      });

      waveEl.addEventListener("pointermove", (e) => {
        if (!seeking) return;
        e.preventDefault();
        e.stopPropagation();
        seekFromPointer(e.clientX);
      });

      const endSeek = (e) => {
        if (!seeking) return;
        seeking = false;
        try { waveEl.releasePointerCapture?.(e.pointerId); } catch (_) {}
      };

      waveEl.addEventListener("pointerup", endSeek);
      waveEl.addEventListener("pointercancel", endSeek);
      waveEl.addEventListener("pointerleave", (e) => {
        if (seeking) endSeek(e);
      });
    }

    // VELOCIDADE: abre/fecha menu + seleciona taxa
    if (speedWrap && speedTrigger && speedMenu) {
      function toggleMenu(forceOpen) {
        const shouldOpen = typeof forceOpen === "boolean"
          ? forceOpen
          : (speedWrap.dataset.open !== "1");

        closeAllSpeedMenus();

        speedWrap.dataset.open = shouldOpen ? "1" : "0";
        speedMenu.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
      }

      speedTrigger.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
      });

      speedTrigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          e.stopPropagation();
          toggleMenu();
        }
      });

      speedItems.forEach(item => {
        item.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();

          const rate = parseFloat(item.dataset.rate);
          if (!RATES.includes(rate)) return;

          audio.playbackRate = rate;
          if (speedLabel) speedLabel.textContent = `${rate}x`;
          markSelectedRate(rate);

          toggleMenu(false);
        });

        item.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            item.click();
          }
        });
      });
    }
  });
}

if (document.readyState !== "loading") {
  initAudioPlayers();
} else {
  document.addEventListener("DOMContentLoaded", initAudioPlayers);
}