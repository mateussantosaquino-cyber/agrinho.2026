// ==============================================
// SCRIPT DO PROJETO TECAgros
// Funcionalidades: Acessibilidade + Simulador Interativo
// ==============================================

// 1. FUNCIONALIDADE DE ACESSIBILIDADE (obrigatória)
const btnAumentar = document.getElementById('btnAumentarFonte');
const btnDiminuir = document.getElementById('btnDiminuirFonte');
const btnContraste = document.getElementById('btnAltoContraste');

// Controle de tamanho da fonte
let tamanhoFonte = 18; // tamanho padrão em px

function aplicarFonte() {
    document.body.style.fontSize = tamanhoFonte + 'px';
}

btnAumentar.addEventListener('click', () => {
    if (tamanhoFonte < 28) { // limite máximo
        tamanhoFonte += 2;
        aplicarFonte();
    }
});

btnDiminuir.addEventListener('click', () => {
    if (tamanhoFonte > 12) { // limite mínimo
        tamanhoFonte -= 2;
        aplicarFonte();
    }
});

// Alto Contraste (adiciona/remove a classe .alto-contraste no body)
btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});

// 2. FUNCIONALIDADE PRINCIPAL: SIMULADOR DOS 3 TIPOS DE AGRO
// O visitante escolhe um tipo e vê uma tecnologia sustentável

// Seleciona todos os botões do simulador
const botoesSimulador = document.querySelectorAll('.botao-simulador');
const areaResultado = document.getElementById('resultadoSimulador');

// Objeto com as informações para cada tipo de agro
const dadosTecnologia = {
    agricultura: {
        titulo: "🌾 Agricultura Inteligente",
        descricao: "Tecnologia: Sensores de solo e drones de mapeamento. <br><strong>Impacto sustentável:</strong> Redução de até 40% no consumo de água e menor uso de fertilizantes, protegendo rios e nascentes."
    },
    agronegocio: {
        titulo: "📈 Agronegócio com Rastreabilidade Digital",
        descricao: "Tecnologia: Blockchain e softwares de gestão. <br><strong>Impacto sustentável:</strong> Diminuição do desperdício de alimentos na logística, redução da pegada de carbono e rastreamento de produtos orgânicos."
    },
    agropecuaria: {
        titulo: "🐄 Agropecuária de Precisão",
        descricao: "Tecnologia: Brincos inteligentes e análise de pastagem por satélite. <br><strong>Impacto sustentável:</strong> Monitoramento da saúde animal sem excesso de medicamentos, preservação do solo e da qualidade da água."
    }
};

// Função que atualiza o resultado conforme o tipo escolhido
function atualizarSimulador(tipo) {
    const info = dadosTecnologia[tipo];
    if (info) {
        areaResultado.innerHTML = `
            <h3>${info.titulo}</h3>
            <p>${info.descricao}</p>
            <small>✨ Simulação TECAgros - Tecnologia a favor do meio ambiente.</small>
        `;
    } else {
        areaResultado.innerHTML = `<p>❌ Opção inválida. Tente novamente.</p>`;
    }
}

// Adiciona evento de clique para cada botão
botoesSimulador.forEach(botao => {
    botao.addEventListener('click', () => {
        // Obtém o tipo a partir do atributo data-tipo
        const tipo = botao.getAttribute('data-tipo');
        atualizarSimulador(tipo);
    });
});

// Pequeno detalhe: garantir que ao carregar a página, o resultado mostre a mensagem inicial
// (já está no HTML, mas por segurança, deixamos padrão)
console.log("TECAgros carregado! Funcionalidades prontas.");
