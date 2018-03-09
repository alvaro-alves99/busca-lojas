class CarregaLojas{

    constructor(){

    }

    static carregaJSON(link){
        var request = new XMLHttpRequest();
        var resposta = false;

        request.open('GET', link);
        request.responseType = "json";
        request.send();

        request.onload = function(){
            resposta = request.response;
            this.conteudo = resposta;
        }

        setTimeout(function(){
            lojas = resposta;
        }, 400);

    }

    static filtraJSON(valor, conteudo){

        let resultadoFiltrado = lojas.filter(function(item){
            if(item.cidade == valor){
                return item;
            }
        });

        return resultadoFiltrado;
    }

}
