document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos de passo e botões
    const passos = document.querySelectorAll('.passo');
    const buttons = document.querySelectorAll('.btn-proximo');

    // Função para mostrar o passo ativo
    function mostrarPasso(id) {
        passos.forEach(passo => {
            passo.classList.remove('ativo');
        });
        document.getElementById(`passo-${id}`).classList.add('ativo');
    }

    // Adiciona event listeners aos botões
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const proximoPasso = button.getAttribute('data-proximo');
            mostrarPasso(proximoPasso);
        });
    });

    // Inicia mostrando o primeiro passo
    mostrarPasso('0');
});
