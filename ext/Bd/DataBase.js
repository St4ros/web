function agregar(){
    document.write((agregar()).toFixed()(2));
}

var db = openDatabase('registro', '1.0','base de datos de registro', 5*1024*1024);
function iniciar(){
    db.transaction(function(tx){
        tx.executeSql('CREATE TABLE IF NOT EXISTS t_registro(x integer)');
    });
}
function agregar(){
    db.transaction(function(tx){
        var x = 0;
        tx.executeSql('insert into t_registro(x) values(?)', [x]);
    });
}