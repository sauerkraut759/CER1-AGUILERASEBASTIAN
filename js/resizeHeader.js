// Script para ajustar el tamaño del header al tamaño de la imagen de fondo

const resizeHeader = () => {

    const header = document.getElementById("header");
    const img = document.getElementById("imgHeader");
    
    header.style.height = img.height + 'px';


}

window.onload = () => {
    resizeHeader();
    window.addEventListener('resize', resizeHeader);
};