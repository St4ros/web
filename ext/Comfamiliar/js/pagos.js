function validar() {
    var numcard, nomcompl, cod, numcc;

    numcard = document.getElementById("numcard").value;
    nomcompl = document.getElementById("nomcompl").value;
    cod = document.getElementById("cod").value;
    numcc = document.getElementById("numcc").value;

    if (numcard == "" || nomcompl == "" || cod == "" || numcc == "") {
        alert("es obligatorio llenar todos los campos");
        return false;
    } else if (!(/^[0-9]+$/).test(numcc)) {
        alert("el numero de identificación contiene caracteres no validos")
    } else if (!(/^[0-9]+$/).test(numcard)) {
        alert("el numero de tarjeta contiene caracteres no validos")
    } else if (!(/^[0-9]+$/).test(cod)) {
        alert("el codigo contiene caracteres no validos")
    } else if (!(cod.length == 3)) {
        alert("el codigo de seguridad debe tener 3 numeros")
    } else if (!(numcard.length == 16)) {
        alert("el numero de tarjeta debe tener 16 numeros")
    } else if (/^([0-9])*$/.test(nomcompl)) {
        alert("el nombre contiene caracteres ")
    } else {

        location.href = "pago_exitoso.html"
    }

}

function validar2() {
    var numcard, nomcompl, cod, numcc;

    numcard = document.getElementById("numcard").value;
    nomcompl = document.getElementById("nomcompl").value;
    cod = document.getElementById("cod").value;
    numcc = document.getElementById("numcc").value;

    if (numcard == "" || nomcompl == "" || cod == "" || numcc == "") {
        alert("es obligatorio llenar todos los campos");
        return false;
    } else if (!(/^[0-9]+$/).test(numcc)) {
        alert("el numero de identificación contiene caracteres no validos")
    } else if (!(/^[0-9]+$/).test(numcard)) {
        alert("el numero de tarjeta contiene caracteres no validos")
    } else if (!(/^[0-9]+$/).test(cod)) {
        alert("el codigo contiene caracteres no validos")
    } else if (!(cod.length == 3)) {
        alert("el codigo de seguridad debe tener 3 numeros")
    } else if (!(numcard.length == 16)) {
        alert("el numero de tarjeta debe tener 16 numeros")
    } else if (/^([0-9])*$/.test(nomcompl)) {
        alert("el nombre contiene caracteres ")
    } else {


        location.href = "pago_exitoso2.html"
    }

}




function validar3() {
    var numcard, nomcompl, cod, numcc;

    numcard = document.getElementById("numcard").value;
    nomcompl = document.getElementById("nomcompl").value;
    cod = document.getElementById("cod").value;
    numcc = document.getElementById("numcc").value;

    if (numcard == "" || nomcompl == "" || cod == "" || numcc == "") {
        alert("es obligatorio llenar todos los campos");
        return false;
    } else if (!(/^[0-9]+$/).test(numcc)) {
        alert("el numero de identificación contiene caracteres no validos")
    } else if (!(/^[0-9]+$/).test(numcard)) {
        alert("el numero de tarjeta contiene caracteres no validos")
    } else if (!(/^[0-9]+$/).test(cod)) {
        alert("el codigo contiene caracteres no validos")
    } else if (!(cod.length == 3)) {
        alert("el codigo de seguridad debe tener 3 numeros")
    } else if (!(numcard.length == 16)) {
        alert("el numero de tarjeta debe tener 16 numeros")
    } else if (/^([0-9])*$/.test(nomcompl)) {
        alert("el nombre contiene caracteres ")
    } else {


        var precio = 4700;
        var compra = 'Vuelo turistico en helicoptero'
        var apellido = localStorage.getItem("apellido");
        var nombre = localStorage.getItem("nombre");
        var nomcompl =nombre+' '+apellido
        date = new Date();
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();
        var fecha = year+'/'+month+'/'+day;
        //numcc = document.getElementById("numcc").value;               Falta añadir para enviarme el nombre de lo que se va a comprar
        //numcc = document.getElementById("numcc").value;               Falta añadir para enviarme el presio
        var correo = localStorage.getItem("correo");
        var transferData = { nomcompl:nomcompl, correo:correo,precio:precio,compra:compra,fecha:fecha};
        var transferJson = JSON.stringify(transferData);
        console.log(transferJson);
        fetch("https://node-app-her.herokuapp.com/compras", {
            method: 'Post',
            body: transferJson
        });
        alert('Pago exitoso');
        location.href = "pago_exitosoafiliado1.html"
    }

}





function validar4() {
    var numcard, nomcompl, cod, numcc;

    numcard = document.getElementById("numcard").value;
    nomcompl = document.getElementById("nomcompl").value;
    cod = document.getElementById("cod").value;
    numcc = document.getElementById("numcc").value;

    if (numcard == "" || nomcompl == "" || cod == "" || numcc == "") {
        alert("es obligatorio llenar todos los campos");
        return false;
    } else if (!(/^[0-9]+$/).test(numcc)) {
        alert("el numero de identificación contiene caracteres no validos")
    } else if (!(/^[0-9]+$/).test(numcard)) {
        alert("el numero de tarjeta contiene caracteres no validos")
    } else if (!(/^[0-9]+$/).test(cod)) {
        alert("el codigo contiene caracteres no validos")
    } else if (!(cod.length == 3)) {
        alert("el codigo de seguridad debe tener 3 numeros")
    } else if (!(numcard.length == 16)) {
        alert("el numero de tarjeta debe tener 16 numeros")
    } else if (/^([0-9])*$/.test(nomcompl)) {
        alert("el nombre contiene caracteres ")
    } else {

        var precio = 2700;
        var compra = 'Carros chocones'
        var apellido = localStorage.getItem("apellido");
        var nombre = localStorage.getItem("nombre");
        var nomcompl =nombre+' '+apellido;
        date = new Date();
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();
        var fecha = year+'/'+month+'/'+day;
        //numcc = document.getElementById("numcc").value;               Falta añadir para enviarme el nombre de lo que se va a comprar
        //numcc = document.getElementById("numcc").value;               Falta añadir para enviarme el presio
        var correo = localStorage.getItem("correo");
        var transferData = { nomcompl:nomcompl, correo:correo,precio:precio,compra:compra,fecha:fecha};
        var transferJson = JSON.stringify(transferData);
        console.log(transferJson);
        fetch("https://node-app-her.herokuapp.com/compras", {
            method: 'Post',
            body: transferJson
        });
        alert('Pago exitoso');

        location.href = "pago_exitosoafiliado2.html"
    }

}
