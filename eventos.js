document.addEventListener('DOMContentLoaded', () => {
    const divContainer = document.getElementById('container');
    const button = document.getElementById('button')
    
    divContainer.addEventListener('click', () => {
        alert('Hola! Soy el div');
    });
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        alert('Hola!');
    });
});
