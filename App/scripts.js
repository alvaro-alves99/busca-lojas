var $ = document.querySelector.bind(document);

//ADICIONANDO EVENTO DE CRIAR O CONTROLLER
var botao = $(".botao-onde");
var selector = $(".seletor");

var lojas = 0;
var seletorValue = selector.value;

botao.addEventListener("click", function(valor){
    var valor = selector.value;

    let controller = new BotaoController(valor);
});
