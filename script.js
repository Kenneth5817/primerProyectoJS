document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');
    
    heading.addEventListener('click', function() {
        alert('¡Has hecho clic en el título!');
    });
    
    console.log('JavaScript cargado y listo.');
});
