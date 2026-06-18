const bookTemas = {
    1: {
        titulo: 'Tema 1',
        cor: '#CD7753',
        esquerda: [
            'Primeiramente, os estudos específicos sobre o transtorno de estresse pós-traumático (TEPT) mais evidente e com correlação direta com as experiências traumáticas. Todos os estudos têm mostrado uma prevalência muito alta desse transtorno em escala mundial.'
        ],
        direita: [
            'Um estudo nacional norte-americano com uma amostra robusta da população em geral e veteranos de guerra constatou, usando critérios do DSM-5, uma prevalência atual de 9,1% e 16,6% para TEPT ao longo da vida. Na amostra de veteranos, 38,7% preencheram critérios para TEPT atual e 75,2% para TEPT ao longo da vida (Miller <em>et al</em>., 2012).'
        ]
    },
    2: {
        titulo: 'Tema 2',
        cor: '#969355',
        esquerda: ['Uma meta-análise com crianças e adolescentes expostos a trauma identificou prevalência geral de TEPT de 15,9% (Alisic et al., 2014). Essa prevalência se eleva a 25% em crianças e adolescentes submetidos a experiências traumáticas interpessoais.'],
        direita: ['Em crianças e adolescentes do sexo feminino, a prevalência vai a 32,9% naquelas submetidas aos traumas interpessoais. E essa prevalência elevada em crianças e adolescentes, além do sofrimento que determina nesse ciclo de vida, impactará na saúde mental na vida adulta.']
    },
    3: {
        titulo: 'Tema 3',
        cor: '#C3934C',
        esquerda: ['Contudo, a dimensão mais importante da experiência traumática trazida pelos estudos epidemiológicos recentes a ser destacada aqui diz respeito à sua posição de determinação e correlação (a comorbidade antes já era admitida) com a saúde física em geral, com transtornos mentais em geral, destaque para as apresentações mais graves e persistentes, e particularmente com a experiência psicótica em sentido amplo e apresentações mais específicas, tal como a esquizofrenia. '],
        direita: ['Vamos destacar aqui apenas as evidências trazidas por estudos e revisões mais recentes, robustas e de qualidade.']
    },
    4: {
        titulo: 'Tema 4',
        cor: '#917655',
        esquerda: ['Uma revisão sistemática de 37 estudos e 253.719 participantes descreve o impacto de múltiplas experiências adversas e traumáticas na infância em 23 desfechos de saúde, destacando o contraste entre pessoas com ≥4 experiências versus nenhuma (Hughes <em>et al</em>., 2017). O padrão apresentado sugere um gradiente de força: associações fracas/modestas para inatividade física, sobrepeso/obesidade e diabetes (razão de chances para os desfechos de <2);'],
        direita: ['moderadas para tabagismo, uso pesado de álcool, saúde autorreferida ruim, câncer e doenças cardíaca/respiratória (razão de chances para os desfechos entre 2 e 3 vezes); fortes para comportamento sexual de risco, adoecimento mental e uso problemático de álcool (razão de chances para os desfechos entre 3 e 6); e mais fortes para uso problemático de drogas e violência interpessoal/autodirigida (razão de chances para os desfechos maior que sete vezes).']
    },
    5: {
        titulo: 'Tema 5',
        cor: '#C3AE95',
        esquerda: ['O estudo de Hogg e colaboradores (2023) encontrou uma ligação muito forte entre ter vivido traumas em qualquer fase da vida e desenvolver algum transtorno mental: quem passou por trauma teve quase três vezes mais chance de apresentar um transtorno em comparação a quem não passou. O mesmo padrão apareceu para traumas na infância, que também aumentaram o risco em quase três vezes. '],
        direita: ['Quando os pesquisadores olharam tipo por tipo de trauma, os resultados ficaram bem claros. O abuso físico apareceu fortemente associado a vários transtornos mentais, com mais do que o dobro do risco. O abuso sexual mostrou uma relação ainda mais forte, com pessoas tendo mais de três vezes mais chances de desenvolver transtornos mentais. Já o abuso emocional se destacou principalmente nos transtornos de ansiedade, também com um risco cerca de três vezes maior.']
    },
    6: {
        titulo: 'Tema 6',
        cor: '#D16E44',
        esquerda: [
            'Esses achados ficam ainda mais fortes quando se olha para a revisão de revisões feita por Abate e colaboradores (2025), que reuniu 43 revisões sistemáticas e meta-análises, envolvendo mais de 14 milhões de pessoas. De forma geral, quem passou por experiências adversas na infância teve um risco cerca de 66% maior de apresentar problemas de saúde mental mais tarde na vida.'
        ],
        direita: [
            'O estudo também mostrou que esse impacto varia de país para país – por exemplo, no Brasil, o risco foi cerca de 1,5 vez maior; nos Estados Unidos, quase duas vezes; e, na Austrália, mais de duas vezes maior.',
            'Quando analisadas experiências específicas, os riscos mais altos apareceram em casos de violência doméstica, seguidos por negligência, abuso sexual, bullying e problemas de saúde mental nos pais, entre outras situações adversas.'
        ]
    },
    7: {
        titulo: 'Tema 7',
        cor: '#9F3E39',
        esquerda: ['No caso da psicose, a meta-análise de Varese e colaboradores (2012) mostrou, de forma consistente, que experiências adversas e traumáticas na infância estão fortemente ligadas ao desenvolvimento de quadros psicóticos. Em termos simples, pessoas que passaram por esses traumas tiveram quase três vezes mais chances de apresentar psicose do que aquelas que não viveram esse tipo de experiência. O efeito global reportado foi uma razão de chances de 2,78 em relação àqueles que não tinham experiências traumáticas. '],
        direita: ['Segundo a meta-análise, pessoas que viveram traumas têm um risco bem maior: cerca de um terço do risco total, enquanto, na população em geral, a chance de desenvolver psicose esquizofrênica é de menos de 1%. Outro estudo muito robusto relata que experiências traumáticas elevam as chances de esquizofrenia cerca de 2,44 vezes maiores entre aqueles com “qualquer trauma” em comparação aos sem trauma (Mall <em>et al</em>., 2020). Um elemento adicional foi a indicação de relação dose-resposta para abuso físico/emocional e negligência cumulativos, elevando as chances de esquizofrenia conforme o acúmulo de exposições.']
    },
    8: {
        titulo: 'Tema 8',
        cor: '#A05978',
        esquerda: ['Um recorte dessas pesquisas que é preciso destacar é a relação com a diversidade de gênero e sexualidade. Vamos nos ater aqui a dois estudos do <em>Australian Child Maltreatment Study</em> (ACMS), que pesquisou a relação entre maus-tratos na infância, transtorno mental e diversidade. O primeiro deles estima prevalências muito altas de cinco tipos de maus-tratos (abuso físico, abuso sexual, abuso emocional, negligência e exposição à violência doméstica) entre participantes com identidades diversas, sobretudo no recorte jovem: gênero diverso com 90,5% de quaisquer maus-tratos e 77% multitipo; sexualidades diversas com 85,3% de quaisquer maus-tratos; e 64,3% multitipo (Higgins <em>et al</em>., 2024). '],
        direita: ['Por sua vez, segundo explora a correlação trauma, maus-tratos, diversidade e transtorno mental (Madzoska <em>et al</em>., 2025). No subgrupo de pessoas com identidades de gênero diversas e história de maus-tratos, o estudo reporta prevalências elevadas de transtorno de ansiedade generalizada (TAG), de 43,3%; transtorno de estresse pós-traumático (TEPT), de 21,3%; autoagressão, 27,8%; e tentativa de suicídio, 7,2%. O estudo observou que as experiências traumáticas e adversas podem se distribuir de forma desigual na população, coexistindo com elevada carga de transtornos e comportamentos autolesivos em subgrupos específicos.']
    },
    9: {
        titulo: 'Tema 9',
        cor: '#AE5E35',
        esquerda: ['Essas evidências sobre correlação e determinação transdiagnóstica da experiência traumática com desfechos diversos de saúde e saúde mental em particular produziram, nos últimos anos, a necessidade de colocar o trauma e as experiências traumáticas como um elemento essencial das propostas de cuidados no campo da saúde mental. Estão sendo produzidas diversas propostas que advogam um modelo de cuidado orientado pelo trauma, “<em>trauma informed care</em>” (cuidado baseado no trauma – trauma informado). '],
        direita: ['Praticamente, toda a literatura mundial recente sobre o cuidado, a crise e as situações de urgência e emergência convocam abordagens informadas pelo trauma (Haines-Delmont <em>et al</em>., 2024).']
    },
    10: {
        titulo: 'Tema 10',
        cor: '#81766B',
        esquerda: ['Uma das principais agências norte-americanas nas áreas da organização e gestão do cuidado em saúde mental, a Substance Abuse and Mental Health Services Administration (SAMHSA), produziu um guia de orientação para estabelecer cuidados informados pelo trauma (SAMHSA, 2014). A OMS e a Associação Mundial de Psiquiatria produziram um documento conjunto advogando os cuidados baseados em recovery e informados pelo trauma como dimensões fundamentais para as redes de cuidados superarem o ambiente de coerção presente nos serviços (Gill <em>et al</em>., 2024).'],
        direita: ['O programa QualityRights da OMS, no seu módulo de treinamento visando acabar com as práticas coercivas, orienta, também, o cuidado baseado em recovery e informado pelo trauma como a base da superação do panorama atual persistente da coerção no campo da saúde mental. Uma revisão recente analisando os diversos modelos criados não valida quaisquer deles como referência, mas considera que grandes avanços estão ocorrendo e que alguns componentes do cuidado informado pelo trauma podem ser incorporados à prática (Nguyen-Feng <em>et al</em>., 2025).']
    }
};

function bookParagrafos(textos) {
    return textos.map(texto => `<p>${texto}</p>`).join('');
}

document.querySelectorAll('[data-book-interativo]').forEach(book => {
    const capa = book.querySelector('.book-capa');
    const aberto = book.querySelector('.book-aberto');
    const final = book.querySelector('.book-final');
    const titulo = book.querySelector('[data-book-title]');
    const esquerda = book.querySelector('[data-book-left]');
    const direita = book.querySelector('[data-book-right]');
    const visitados = new Set();
    let leituraCompleta = false;

    function fecharLivro() {
        aberto.classList.remove('is-active');
        final.classList.add('is-active');
    }

    function mostrarTema(numero) {
        if (leituraCompleta) {
            fecharLivro();
            return;
        }

        const tema = bookTemas[numero];

        titulo.textContent = tema.titulo;
        titulo.style.color = tema.cor;
        esquerda.innerHTML = bookParagrafos(tema.esquerda);
        direita.innerHTML = bookParagrafos(tema.direita);

        visitados.add(numero);

        if (visitados.size === Object.keys(bookTemas).length) {
            leituraCompleta = true;
        }
    }

    function abrirLivro() {
        visitados.clear();
        leituraCompleta = false;
        capa.classList.remove('is-active');
        final.classList.remove('is-active');
        aberto.classList.add('is-active');
        mostrarTema(1);
    }

    capa.addEventListener('click', abrirLivro);
    final.addEventListener('click', abrirLivro);

    book.querySelectorAll('[data-book-theme]').forEach(botao => {
        botao.addEventListener('click', () => {
            mostrarTema(botao.dataset.bookTheme);
        });
    });
});
