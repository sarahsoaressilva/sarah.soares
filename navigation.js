

export function navMobile() {
  const navButton = document.querySelector('.mobile__menu__button');
  const navList = document.querySelector('.menu');

  /* Função para quando ocorrer um click no botão */
  navButton.addEventListener('click', () => {

    /* Mudando a aria-expanded por motivos de acessibilidade, para leitores de tela */
    navList.hasAttribute("data-visible") ?
    navButton.setAttribute("aria-expanded", false) :
    navButton.setAttribute("aria-expanded", true);

    /* Adiciona o Atributo para .menu para mostrar que o menu está aberto*/
    navList.toggleAttribute("data-visible");

    /* console.log('clicaste?'); */
  })
}
 