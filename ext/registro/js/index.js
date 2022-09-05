function Listacompras() {
    fetch("https://node-app-her.herokuapp.com/login")
        .then((response) => response.json())
        .then((registro) => {//es para insertar codigo y cosas de la base de datos en el html
            let registroUsuarios = document.querySelector("#comone");
            for (const itemregistro of registro) {
                let tr = "<div>" + itemregistro.correo + "</div>";
                console.log(itemregistro.correo);

                registroUsuarios.innerHTML += tr;
            }
            console.log(registro);
        });
}



const send = document.getElementById("send");
send.addEventListener("submit", (event) => {
    event.preventDefault();
    var aux4 = 0;
    var correo = document.getElementById('correo').value;

    fetch("https://node-app-her.herokuapp.com/login")
        .then((response) => response.json())
        .then((registro) => {//es para insertar codigo y cosas de la base de datos en el html
            for (const itemregistro of registro) {
                const corr = JSON.stringify(itemregistro.correo);
                const corr2 = JSON.stringify(correo);
                console.log(itemregistro);
                if (corr == corr2) {
                    aux4 = 1;
                    break;
                }
            }
            console.log(registro);
        });

    setTimeout(() => {

        if (aux4 == 0) {
            var nombre = document.getElementById('nombre').value;
            //var correo = document.getElementById('correo').value;
            var apellido = document.getElementById('apellido').value;
            var fechanaci = document.getElementById('fechanaci').value;
            var password = document.getElementById('password').value;
            var aux = 0;
            var aux3 = 0;
            var aux2 = nombre + "";
            if (nombre == "" || correo == "" || apellido == "" || fechanaci == "" || password == "") {
                alert("COMPLETAR TODOS LOS CAMPOS ");
            } else if (/^[0-9]+$/i.test(nombre) || /^[0-9]+$/i.test(apellido)) {
                alert("el valor " + nombre + "   " + apellido + " tienen caracteres incorrectos");


            } else if (!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i).test(correo)) {
                alert("el valor " + correo + " no es un direccion de correo ");
            }
            else {
                if (document.getElementById('terminos').checked) {
                    var gmail = document.getElementById("correo").value;
                    var nombre1 = document.getElementById("nombre").value;
                    var apellido1 = document.getElementById('apellido').value;
                    var fechanaci1 = document.getElementById('fechanaci').value;
                    var password1 = document.getElementById('password').value;
                    var transferData = { gmail: gmail, nombre1: nombre1, apellido1: apellido1, fechanaci1: fechanaci1, password1: password1 };
                    var transferJson = JSON.stringify(transferData);
                    console.log(transferJson);
                    fetch("https://node-app-her.herokuapp.com/registro", {
                        method: 'Post',
                        body: transferJson
                    });
                    location.href ="../login/login.html"
                } else {
                    alert('falta aceptar terminos y condicions ');
                }

            }
        } else {
            alert('correo ya existe');
        }


    }, 6000);

    
});





