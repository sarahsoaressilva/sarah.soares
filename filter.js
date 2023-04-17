

export function galeryFilter() {
    
    /* Seleciona ul */
    const filtros = document.querySelector(".filter");

    /* Seleciona todos os itens que possuem essa classe. */
    const itens = document.querySelectorAll(".box");
    console.log(itens);

   filtros.addEventListener("click", (event) => {
       console.log(event);
       
       /* Vê se o elemento contém o filter__item na propriedade target */
       if(event.target.classList.contains("filter__item")) {

            /* Remove a classe "active" no item que possui "active"  */
            filtros.querySelector(".active").classList.remove("active");

            /* Adiciona a classe "active" no item clicado  */
            event.target.classList.add("active");

            /* Pega o valor do atributo "data-filter" */
            const valorFiltro = event.target.getAttribute("data-filter");
            console.log(valorFiltro);

            itens.forEach((item) => {

                if( item.classList.contains(valorFiltro) || valorFiltro === "todos" ) {
                    item.classList.add("show");
                    item.classList.remove("hide");
                } 
                else {
                    item.classList.add("hide");
                    item.classList.remove("show");
                };
            });

       }   

    }); 

}