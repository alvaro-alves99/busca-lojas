class View{
    constructor(){
        throw new Error ("Essa classe nao pode ser instanciada");
    }

    static montaHTML(array, valor){
        let container = $(".resultados__container");

        let resultadoContainer = $(".resultados__titulo");

        resultadoContainer.innerHTML = `<h3>Foram encontradas <span class="num-lojas">${array.length}</span> lojas em <strong class="cidade-inline">${valor}</strong></h3>`


        let informacao = array;

        container.innerHTML = "";

        informacao.forEach(function(item){
            container.innerHTML += `<div class="resultado">
                <figure>
                    <div class="figure__imagem">
                        <img src="http://homolog.tfs.com.br/wp-content/uploads/2018/01/loja_maceio.jpg" alt="exemplo">
                    </div>

                    <figcaption>
                        <h4>${item.nome}</h4>
                        <ul>
                            <li>${item.cidade}</li>
                            <li>${item.cep}</li>
                            <li>${item.telefone}</li>
                        </ul>

                        <a href="#">Acesse o site</a>
                    </figcaption>
                </figure>
            </div>`;

        })
    }
}
