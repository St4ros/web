function Listacomprasp() {
    fetch("https://node-app-her.herokuapp.com/datos")
        .then((response) => response.json())
        .then((registro) => {//es para insertar codigo y cosas de la base de datos en el html
            let registroUsuarios = document.querySelector("#historialp");
            for (const itemregistro of registro) {
                let tr = "<br><div>"+'Nombre: '+ itemregistro.nombrecompleto +'__/Precio: '+ itemregistro.precio +'__/Servicio ad: '+ itemregistro.compra + '__/Fecha: '+itemregistro.fecha+ "</div>";

                var correo = localStorage.getItem("correo");
                const corr = JSON.stringify(correo);
                const corr2 = JSON.stringify(itemregistro.correo);
                if (corr == corr2) {
                    console.log(itemregistro.correo);
                    registroUsuarios.innerHTML += tr;
                }

            }
            console.log(registro);
        });
}
Listacomprasp();