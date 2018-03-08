class CarregaLojas{

    constructor(){

    }

    static carregaJSON(link){
        var request = new XMLHttpRequest();
        var conteudo = "banana";

        request.open('GET', link);
        request.responseType = 'json';

        request.onload = function(){
            conteudo = request.response;
        }

        console.log(conteudo);

        return conteudo;

    }
}
