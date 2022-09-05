document.getElementById('boton').addEventListener("click",eliminar);
function eliminar(){
    localStorage.removeItem("nombre");
    localStorage.removeItem("apellido");
    localStorage.removeItem("contraseña");
    localStorage.removeItem("correo");
    localStorage.removeItem("fecha");
}