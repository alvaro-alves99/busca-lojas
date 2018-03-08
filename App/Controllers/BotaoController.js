console.log("carreguei");

class BotaoController{
    constructor(selector){
        this.selector = selector.value;
        this.conteudo = CarregaLojas.carregaJSON("http://homolog.tfs.com.br/lojas.json");

        console.log(this.conteudo);
    }
}
