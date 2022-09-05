var apellido = localStorage.getItem("apellido");
var nombre = localStorage.getItem("nombre");
var correo = localStorage.getItem("correo");


document.getElementById('btn-eliminar-perfil').addEventListener("click", eliminar);
function eliminar() {
    localStorage.removeItem("nombre");
    localStorage.removeItem("apellido");
    localStorage.removeItem("contraseña");
    localStorage.removeItem("correo");
    localStorage.removeItem("fecha");
}
function editarusuario() {

    let registroUsuarios3 = document.querySelector("#nombredeusuario");
    let tr3 = " " + nombre + " " + apellido;
    let registroUsuarios = document.querySelector("#datafiliado");
    let tr = " " + nombre;
    let registroUsuarios2 = document.querySelector("#correoafiliado");
    let tr2 = " " + correo;
    registroUsuarios.innerHTML += tr;
    registroUsuarios2.innerHTML += tr2;
    registroUsuarios3.innerHTML += tr3;

}
editarusuario();

function eliminaarusuario() {
    var gmail = localStorage.getItem("correo");
    var nombre1 = document.getElementById('cambio__nombre').value;
    var apellido1 = document.getElementById('cambio__Apellido').value;
    var password1 = document.getElementById('cambio__contraseña').value;
    var password2 = document.getElementById('cambio__confirmar__contraseña').value;
    var fechanaci1 = document.getElementById('cambio__fecha').value;
    var transferData = { gmail: gmail, nombre1: nombre1, apellido1: apellido1, fechanaci1: fechanaci1, password1: password1 };
    var transferJson = JSON.stringify(transferData);
    console.log(transferJson);
    fetch("https://node-app-her.herokuapp.com/delete", {
        method: 'Post',
        body: transferJson
    });

    eliminar();
    location.href = "../../index.html";
}

function change() {
    var gmail = localStorage.getItem("correo");
    var nombre1 = document.getElementById('cambio__nombre').value;
    var apellido1 = document.getElementById('cambio__Apellido').value;
    var password1 = document.getElementById('cambio__contraseña').value;
    var password2 = document.getElementById('cambio__confirmar__contraseña').value;
    var fechanaci1 = document.getElementById('cambio__fecha').value;
    if(nombre1 == '' || apellido1 == '' || password1 =='' || password2 == '' || fechanaci1==''){
        alert('llenar todos los campos');
    }else if (/^[0-9]+$/i.test(nombre1) || /^[0-9]+$/i.test(apellido1)) {
        alert("el valor " + nombre1 + "   " + apellido1 + " tienen caracteres incorrectos");
    }else{
        if (password1 == password2) {
            var transferData = { gmail: gmail, nombre1: nombre1, apellido1: apellido1, fechanaci1: fechanaci1, password1: password1 };
            var transferJson = JSON.stringify(transferData);
            console.log(transferJson);
    
            console.log('incertar')
    
            fetch("https://node-app-her.herokuapp.com/update", {
                method: 'Post',
                body: transferJson
            });
            alert('Perfil editado con exito');
            location.href = "../../index.html";
        } else {
            alert('las contraseñas no coinciden');
        }
    }
}

