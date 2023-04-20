
export function tabs() {
    const tabs = document.querySelectorAll('.tab__btn');
    const content = document.querySelectorAll('.content');

    tabs.forEach((tab, index) => {

        tab.addEventListener('click', () => {
            tabs.forEach(tab => tab.classList.remove('active'));
            tab.classList.add('active');

            content.forEach(content => content.classList.remove('active'));
            content[index].classList.add('active');
        });

    });

};
   