document.addEventListener("DOMContentLoaded", function () {
    // Clicou no Vicenzo
    document.querySelector('img[alt="Foto de Vicenzo"]').addEventListener("click", function () {
        window.location.href = "vicenzo.html";
    });

    // Clicou no Guilherme
    document.querySelector('img[alt="Foto de Guilherme"]').addEventListener("click", function () {
        window.location.href = "guilherme.html";
    });

    // Clicou no Diogo
    document.querySelector('img[alt="Foto de Diogo"]').addEventListener("click", function () {
        window.location.href = "diogo.html";
    });

    // Corrige o botão "Home" para voltar à página principal (caso esteja em uma página de perfil)
    const homeLinks = document.querySelectorAll('a[href="#home"]');
    homeLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "index.html";
        });
    });
});
