document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.querySelector('.save-button');
    const resetButton = document.querySelector('.reset-button');

    saveButton.addEventListener('click', () => {
        alert('Configurações salvas com sucesso!');
    });

    resetButton.addEventListener('click', () => {
        if (confirm('Deseja realmente restaurar as configurações de fábrica?')) {
            alert('Configurações restauradas!');
        }
    });
});