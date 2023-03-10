
export function validarFormatoFecha(campo) {
    var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    if ((campo.match(RegExPattern)) && (campo!='')) {
          return true;
    } else {
          return false;
    }
}

export function existeFecha(fecha){
    var fechaf = fecha.split("/");
    var day = fechaf[0];
    var month = fechaf[1];
    var year = fechaf[2];
    var date = new Date(year,month,'0');
    if((day-0)>(date.getDate()-0)){
          return false;
    }
    return true;
}

export function dateDiff(formato, fecha1 , fecha2) {
    var f1 = fecha1.split("/")
    var f2 = fecha2.split("/")
    var newFecha1 = new Date(f1[2], f1[1] - 1, f1[0])
    var newFecha2 = new Date(f2[2], f2[1] - 1, f2[0])
    var dif = newFecha2 - newFecha1

    if (formato.toLowerCase() === "d") {
        return Math.floor(dif/(1000*60*60*24))
    } else if (formato.toLowerCase() === "m") {
        return Math.floor(dif/(1000*60*60*24)/30)
    } else if (formato.toLowerCase() === "y") {
        return Math.floor(dif/(1000*60*60*24)/365)
    } else {
        return dif
    }
}

export function now(formato) {
    var hoy = new Date()
    var dia = hoy.getDate()
    var mes = hoy.getMonth() + 1
    var ano = hoy.getFullYear()
    var res = formato
    res = res.replace("yyyy", ano)
    if (mes<10){
        res = res.replace("mm","0" + mes.toString())
    } else {
        res = res.replace("mm",mes)
    }
    if (dia<10){
        res = res.replace("dd","0" + dia.toString())   
    } else {
        res = res.replace("dd",dia)   
    }
    return res
}

export function formatoFecha(dia, mes, ano, formato) {
    var res = formato
    res = res.replace("yyyy", ano)
    if (mes<10){
        res = res.replace("mm","0" + mes.toString())
    } else {
        res = res.replace("mm",mes)
    }
    if (dia<10){
        res = res.replace("dd","0" + dia.toString())   
    } else {
        res = res.replace("dd",dia)   
    }
    return res
}
