class BotaoController{
    constructor(valor){
        this.selector = valor;
        this.funcaoJSON = CarregaLojas.carregaJSON("http://homolog.tfs.com.br/lojas.json");

        setTimeout(function(){
            this.conteudo = lojas;
            this.filtrado = CarregaLojas.filtraJSON(valor, lojas);
        }, 500);

        setTimeout(function(){
            console.log(this.filtrado);

            View.montaHTML(this.filtrado, valor);
        }, 800);



    }

}
