AOS.init();

document.querySelector('.header-button').addEventListener('click', function() {
    // Adiciona a regra de suavização de rolagem
    document.documentElement.style.scrollBehavior = 'smooth';

    // Remove a regra de suavização de rolagem após 1 segundo (1000 ms)
    setTimeout(function() {
        document.documentElement.style.scrollBehavior = 'auto';
    }, 1000);
});