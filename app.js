const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {

    // Alterna entre dark-theme e light-theme
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    // Altera o texto do botão
    if (document.body.classList.contains('light-theme')) {
        this.textContent = "Dark Mode";
    } else {
        this.textContent = "Light Mode";
    }

    console.log('current class nome: ' + classNome);
});

