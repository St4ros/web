const send = document.getElementById("send");
send.addEventListener("submit", (event) => {
    event.preventDefault();
    var aux4 = 0;
    var correo = document.getElementById('correo_lg').value;
    var password = document.getElementById('contraseña_lg').value;
    


    fetch("https://node-app-her.herokuapp.com/login")
        .then((response) => response.json())
        .then((registro) => {//es para insertar codigo y cosas de la base de datos en el html
            for (const itemregistro of registro) {
                const corr = JSON.stringify(itemregistro.correo);
                const corr2 = JSON.stringify(correo);
                const pass = JSON.stringify(itemregistro.contraseña);
                const pass2 = JSON.stringify(password);



                console.log(pass, " comparado: ", pass2, " donde ", corr, " comparadoa: ", corr2);
                if (corr == corr2 && pass == pass2) {
                    aux4 = 1;
                    var nombre = itemregistro.nombre;
                    var apellido = itemregistro.apellido;
                    var fech = itemregistro.fecha;
                    localStorage.setItem("nombre", nombre);
                    localStorage.setItem("correo", correo);
                    localStorage.setItem("apellido", apellido);
                    localStorage.setItem("contraseña", password);
                    localStorage.setItem("fecha", fech);
                    break;
                }
            }

        });

    setTimeout(() => {
        if (aux4 == 0) {
            if (correo == "" || password == "") {
                alert("COMPLETAR TODOS LOS CAMPOS ");
            } else if (!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i).test(correo)) {
                alert('El correo y la contraseña son incorrectos');
            } else {
                alert('correo o contraseña incorrectos');
            }
        } else {
            location.href = "../../afiliado.html";
        }
    }, 4000);

});

