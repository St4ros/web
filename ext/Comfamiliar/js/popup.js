var btnAbrirPopup = document.getElementById('btn-editar'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup= document.getElementById('btn-editar-cerrar'),
    btncerrarpopup= document.getElementById('btn_cerrar_popup');

    btnAbrirPopup.addEventListener('click', function(){
        overlay.classList.add('active');
    });
    
    btncerrarpopup.addEventListener('click', function(){
        overlay.classList.remove('active');
    });
    