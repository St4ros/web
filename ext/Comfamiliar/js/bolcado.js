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
