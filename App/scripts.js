var $ = document.querySelector.bind(document);

//ADICIONANDO EVENTO DE CRIAR O CONTROLLER
var botao = $(".botao-onde");
var selector = $(".seletor");

var valor = selector.value;

botao.addEventListener("click", function(valor){
    let controller = new BotaoController(valor);
});
