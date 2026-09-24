const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "De que maneira a sociedade e o poder público podem atuar conjuntamente para erradicar a extrema pobreza e garantir alimentação saudável e acessível para todos?",
        alternativas: [
            {
                texto: "Fortalecimento de programas de transferência de renda integrados ao incentivo à agricultura familiar local.
",
               
             afirmacao: "Perfil Técnico-Sustentável. Aluno focado em soluções estruturais, desenvolvimento regional, logística urbana/rural e garantias de condições básicas de sobrevivência."

            },
        
            {
                texto:  "Expansão de bancos de alimentos e combate ao desperdício comercial. 
",
                afirmacao: "💧 Guardião das Águas Valoriza a proteção dos rios e nascentes, reconhecendo que a água é essencial para a vida e para o equilíbrio dos ecossistemas.",
                "PERFIL A: O Educador / Focado na Infância. Aluno que enxerga a escola como o principal pilar de transformação social e nutrição infantil diária.", 
"PERFIL B: O Ativista Comunitário. Aluno centrado na mobilização de vizinhanças, trabalho coletivo, auto-organização de bairros e soberania alimentar local.",
            }    
        
    },
    {
       
            enunciado: "Como você contribui para a proteção ambiental?",

            alternativas: [
                {
                    texto: "Reduzindo o consumo de água e energia.",
                    afirmacao: " O(a) Economizador(a) Consciente:Pessoa que procura evitar desperdícios e utiliza água e energia de maneira responsável.",
                  "Consumidor sustentável que combate o desperdício, utilizando água e energia de forma planejada e inteligente."

                },
                {
                    texto:  "Reduzindo o uso de produtos descartáveis.",
                    afirmacao: "O(a) Redutor(a) de Resíduos:Pessoa que prefere produtos reutilizáveis e busca produzir menos lixo no cotidiano.",
                  "Consumidor sustentável que prioriza itens duráveis para diminuir a geração de lixo diário."

                }
            ]
        },
        {
            enunciado: " Como você ajudaria a reduzir a poluição?",


            alternativas: [
                {
                    texto: " Utilizaria bicicleta ou caminharia quando possível.",
                    afirmacao: "O(a) Mobilizador(a) Sustentável:Pessoa que valoriza formas de transporte mais sustentáveis no dia a dia.",
                  "Cidadão consciente que prioriza o transporte limpo, como a bicicleta e a caminhada, na rotina urbana."

                }
                {
                    texto:    "Utilizaria transporte coletivo.",
               
                    afirmacao: " O(a) Usuário(a) Consciente:Pessoa que considera alternativas de transporte que podem diminuir o impacto ambiental.",
                " Escolhe meios de transporte alternativos e eficientes para diminuir as emissões de carbono na rotina"

        }    
               
            ]
        },
]



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}

function aleatorio(lista) {
const posicao = Math.floor(Math.random()* lista.length);
return lista[posicao];
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();