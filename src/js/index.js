// 1° PASSO - dar um jeo de pegar os elementos que representam as abas do HTML
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    // 2° PASSO - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)

        
    })
})


function selecionarAba(aba){
    // 3° PASSO - quando o usuário clicar, desmarcar a aba selecionada
const abaSelecionada = document.querySelector(".aba.selecionado");
abaSelecionada.classList.remove("selecionado");

// 4° PASSO - marcar a aba clicada como selecionado
aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
    // 5° PASSO - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //6° PASSO - mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}

























