// CONSTANTES ----------------------------------------
const datos = {
    // CODIGO : [ TIPO DE OP - { MONTOS POR TIPO DE OP } - { COMISIÓN POR DIVISA } - { TIPO DE CAMBIO POR DIVISA } - ES COMPRA O VENTA - ES COMPRA - ES VENTA ]
    5010: ["DEPÓSITO EN EF.", {PEN: ["5010-PEN", 0.0], USD: ["5010-USD", 0.0], EUR: ["5010-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    5011: ["DEPÓSITO MB MP", {PEN: ["5011-PEN", 0.0], USD: ["5011-USD", 0.0], EUR: ["5011-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    5012: ["DEPÓSITO MB OP", {PEN: ["5012-PEN", 0.0], USD: ["5012-USD", 0.0], EUR: ["5012-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    5013: ["DEPÓSITO OB MP", {PEN: ["5013-PEN", 0.0], USD: ["5013-USD", 0.0], EUR: ["5013-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    5014: ["DEPÓSITO OB OP", {PEN: ["5014-PEN", 0.0], USD: ["5014-USD", 0.0], EUR: ["5014-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    6010: ["CHEQUE PAGADO", {PEN: ["6010-PEN", 0.0], USD: ["6010-USD", 0.0], EUR: ["6010-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    6016: ["PAGO PARCIAL DE CHEQUE", {PEN: ["6016-PEN", 0.0], USD: ["6016-USD", 0.0], EUR: ["6016-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    6015: ["CHEQUE CERTIFICADO", {PEN: ["6015-PEN", 0.0], USD: ["6015-USD", 0.0], EUR: ["6015-EUR", 0.0]},{PEN:15,USD:5,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    6014: ["CHEQUE DE GERENCIA", {PEN: ["6014-PEN", 0.0], USD: ["6014-USD", 0.0], EUR: ["6014-EUR", 0.0]},{PEN:15,USD:5,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    6011: ["RETIRO DE EFECTIVO", {PEN: ["6011-PEN", 0.0], USD: ["6011-USD", 0.0], EUR: ["6011-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    5016: ["CUOTA TARJETA", {PEN: ["5016-PEN", 0.0], USD: ["5016-USD", 0.0], EUR: ["5016-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    5017: ["CUOTA PRÉSTAMO", {PEN: ["5017-PEN", 0.0], USD: ["5017-USD", 0.0], EUR: ["5017-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    5015: ["PAGO DE SERVICIO", {PEN: ["5015-PEN", 0.0], USD: ["5015-USD", 0.0], EUR: ["5015-EUR", 0.0]},{PEN:3.50,USD:2,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    6012: ["PRÉSTAMO EFECTIVO", {PEN: ["6012-PEN", 0.0], USD: ["6012-USD", 0.0], EUR: ["6012-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    6013: ["RETIRO DE TARJETA", {PEN: ["6013-PEN", 0.0], USD: ["6013-USD", 0.0], EUR: ["6013-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    7010: ["COMPRA", {PEN: ["7010-PEN", 0.0], USD: ["7010-USD", 0.0], EUR: ["7010-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},true,true,false],
    7015: ["COMPRA ESPECIAL", {PEN: ["7015-PEN", 0.0], USD: ["7015-USD", 0.0], EUR: ["7015-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},true,true,false],
    7005: ["VENTA", {PEN: ["7005-PEN", 0.0], USD: ["7005-USD", 0.0], EUR: ["7005-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},true,false,true],
    7020: ["VENTA ESPECIAL", {PEN: ["7020-PEN", 0.0], USD: ["7020-USD", 0.0], EUR: ["7020-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},true,false,true],
    8005: ["OTROS", {PEN: ["8005-PEN", 0.0], USD: ["8005-USD", 0.0], EUR: ["8005-EUR", 0.0]},{PEN:3.50,USD:2,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    7025: ["SOBRANTE DE CAJA", {PEN: ["7025-PEN", 0.0], USD: ["7025-USD", 0.0], EUR: ["7025-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    9000: ["INGRESO DE BOVEDA", {PEN: ["9000-PEN", 0.0], USD: ["9000-USD", 0.0], EUR: ["9000-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    7030: ["FALTANTE DE CAJA", {PEN: ["7030-PEN", 0.0], USD: ["7030-USD", 0.0], EUR: ["7030-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false],
    9005: ["EGRESO A BOVEDA", {PEN: ["9005-PEN", 0.0], USD: ["9005-USD", 0.0], EUR: ["9005-EUR", 0.0]},{PEN:0.0,USD:0.0,EUR:0.0},{PEN:0.0,USD:0.0,EUR:0.0},false,false,false]
};
const celdasOcultas = [8005];
const color = {
    "YWRtaW5Ac2IuY29t" : ["c2IxOTk4",true,"INGRESO NO AUTORIZADO"],
    "cmV2ZXJzYQ==" : ["MTE0Nzg="],
    "Q0JDNTAw" : ["MTAyMDMw",true,"INGRESO NO AUTORIZADO"],
    "Q0JDNTEw" : ["MTAyMDQw",true,"INGRESO NO AUTORIZADO"],
    "Q0JDNTIw" : ["MTAyMDUw",false,"INGRESO NO AUTORIZADO"],
    "Q0JDNTMw" : ["MTAyMDYw",false,"INGRESO NO AUTORIZADO"],
    "Q0JDNTQw" : ["MTAyMDcw",false,"INGRESO NO AUTORIZADO"],
    "Q0JDNTUw" : ["MTAyMDgw",false,"INGRESO NO AUTORIZADO"],
}
const tiposCuenta = [
    "CUENTA CORRIENTE",
    "CUENTA DE AHORROS",
    "CUENTA A PLAZO FIJO",
    "TARJETA DE CRÉDITO",
    "CUENTA CTS",
    "FONDOS MUTUOS",
    "PAGO DE CUOTA",
    "DESEMBOLSO",
    "CERTIFICACIÓN",
    "EMISIÓN DE CHEQUE",
    "LEASING",
    "FACTORING",
    "COLEGIO",
    "LETRAS",
    "CLARO",
    "ENTEL",
    "EDELNOR",
    "LUZ DEL SUR",
    "SEDAPAL",
    "MOVISTAR",
    "OTROS"
];
const plazas = [
    "LIMA",
    "AMAZONAS",
    "ÁNCASH",
    "APURÍMAC",
    "CALLAO",
    "AREQUIPA",
    "AYACUCHO",
    "CAJAMARCA",
    "CUSCO",
    "HUANCAVELICA",
    "HUÁNUCO",
    "ICA",
    "JUNÍN",
    "LA LIBERTAD",
    "LAMBAYEQUE",
    "LORETO",
    "MADRE DE DIOS",
    "MOQUEGUA",
    "PASCO",
    "SAN MARTÍN",
    "TACNA",
    "TUMBES",
    "UCAYALI",
    "OTROS",
    "EXTERIOR"
];

// PESTAÑAS ------------------------------------------
var registro = document.getElementById("body-user");
var logo = document.getElementById("box-logo");
var operacionesPage = document.getElementById("body-opData");
var codigosPage = document.getElementById("body-codData");
var cajaPage = document.getElementById("body-cajaData");

// BOTONES CERRAR -----------------------------------
var xOperaciones = document.getElementById("exit-OP");
var xCodigos = document.getElementById("exit-COD");
var xCaja = document.getElementById("exit-CAJ");

// LISTAS OPCIONES ----------------------------------
var listCodigo = document.getElementById("cod-to-inp-br");           //1
var listTipoCuenta = document.getElementById("tc-to-inp-br");        //3
var listPlaza = document.getElementById("pl-oc-inp-br");             //7
var listMoneda = document.getElementById("mo-imp-inp-br");

// DATOS MOSTRADOS ----------------------------------
var datoPEN = document.getElementById("sal-s/");
var datoUSD = document.getElementById("sal-$");
var datoEUR = document.getElementById("sal-E");
var datoTipoTransac = document.getElementById("tipo-transac-p");    //2

// TABLAS -------------------------------------------
var tableResults = document.getElementById("tabla-oudtpu");
var tableCodigos = document.getElementById("codigos-info-table");
var tableGeneral = document.getElementById("general");
var tableEspecific = document.getElementById("especific");


// DATOS CAPTURADOS ---------------------------------
var user = document.getElementById("user-data");
var password = document.getElementById("password-data");
var datoImporte = document.getElementById("imp-imp-inp-br");         //8 format
var datoNumCuenta = document.getElementById("nc-to-inp-br");         //4
var datoCuentaGira = document.getElementById("cg-oc-inp-br");        //5
var datoNumCheque = document.getElementById("nch-oc-inp-br");        //6
var datoComision = document.getElementById("com-imp-inp-br");        //9 format
var capturePEN = document.getElementById("ing-s/");
var captureUSD = document.getElementById("ing-$");
var captureEUR = document.getElementById("ing-E");

const dataDebeHaber = {
        PEN : {
            DEBE   : [5013,5014,6010,6016,6011,6012,6013,7010,7015,7030,9005,5011,5012],
            HABER  : [5010,5011,5012,5013,5014,6015,5016,6014,5017,5015,7005,7020,7025,9000],
            idDebe : "debe-PEN",
            idHaber: "haber-PEN",
            salIni : capturePEN,
        },
        USD : {
            DEBE   : [5011,5012,5013,5014,6010,6016,6011,6012,6013,7005,7020,7030,9005],
            HABER  : [5010,5011,5012,5013,5014,5016,6015,6014,5017,5015,7010,7015,7025,9000],
            idDebe : "debe-USD",
            idHaber: "haber-USD",
            salIni : captureUSD,
        },
        EUR : {
            DEBE   : [5011,5012,5013,5014,6010,6016,6011,6012,6013,7005,7020,7030,9005],
            HABER  : [5010,5011,5012,5013,5014,5016,6015,6014,5017,5015,7010,7015,7025,9000],
            idDebe : "debe-EUR",
            idHaber: "haber-EUR",
            salIni : captureEUR,
        }
    
}
const reglaCuadre = {
    PEN : {
        "+" : [5010,5015,5016,5017,6014,6015,7005,7020,7025,9000],
        "-" : [6010,6011,6012,6013,6016,7010,7015,7030,9005],
        id  : "saldo-efec-PEN",
        salIni : capturePEN,
        salShow : datoPEN,
        monto : 0.0
    },
    USD : {
        "+" : [5010,5015,5016,5017,6014,6015,7010,7015,7025,9000],
        "-" : [6010,6011,6012,6013,6016,7005,7020,7030,9005],
        id  : "saldo-efec-USD",
        salIni : captureUSD,
        salShow : datoUSD,
        monto : 0.0
    },
    EUR : {
        "+" : [5010,5015,5016,5017,6014,6015,7010,7015,7025,9000],
        "-" : [6010,6011,6012,6013,6016,7005,7020,7030,9005],
        id  : "saldo-efec-EUR",
        salIni : captureEUR,
        salShow : datoEUR,
        monto : 0.0
    }
}

// FUNTION ------------------------------------------
// VALIDATION ---------
function encrip(valor){
    return btoa(valor);
}
function login(){
    if(user.value && password.value){
        var pswr = encrip(password.value);
        var usr = encrip(user.value);
        var colorPswr = '';
        Object.keys(color).includes(usr) ? colorPswr = color[usr][0] : colorPswr = 'fff';
        var verifi = (pswr == colorPswr);
        if(verifi){
            var active = color[usr][1];
            if(active){
                registro.style.display = "none";
                logo.style.display = "flex";
            }else{
                user.value = "";
                password.value = "";
                alert(color[usr][2]);
            }
        }
        else{
            user.value = "";
            password.value = "";
            alert("Usuario o Contraseña incorrecto");
        }
    }
    else{
        alert("Igresa Usuario y Contraseña para iniciar el programa");
    }
}
function verifi(){
    var secClave = document.getElementById('body-admin');
    secClave.style.display = 'flex';
}
// FORMAT -------------
function divisaFormat(value, divs){
    value = parseFloat(value);
    if (divs == "PEN"){
        var format = value.toLocaleString('es-PE', { style: 'currency', currency: divs });
    }
    else if (divs == "USD"){
        var format = value.toLocaleString('en-US', { style: 'currency', currency: divs });
    }
    else{
        var format = value.toLocaleString('es-ES', { style: 'currency', currency: divs });
    }
    return format
}
// OPEN ---------------
function openOperaciones(){
    operacionesPage.style.display = "block";
    logo.style.display = "none";
}
function openCodigos(){
    codigosPage.style.display = "block";
}
function openCaja(){
    cajaPage.style.display = "block";
}
// CLOSE --------------
function closeOperaciones(){
    operacionesPage.style.display = "none";
    logo.style.display = "flex";
}
function closeCodigos(){
    codigosPage.style.display = "none";
}
function closeCaja(){
    cajaPage.style.display = "none";
}
// SHOW ---------------
function showPEN(){
    saveSaldoEfectivo("PEN");
    saveDebeHaber("PEN"); 
}
function showUSD(){
    saveSaldoEfectivo("USD");
    saveDebeHaber("USD");
}
function showEUR(){
    saveSaldoEfectivo("EUR");
    saveDebeHaber("EUR");
}
function showTransac(value){
    datoTipoTransac.textContent = datos[value][0];
}
function showComision(value){
    datoComision.value = datos[listCodigo.value][2][value];
}
// SAVE ---------------
function saveTipoCambio(value,divs,cod,id){
    datos[cod][3][divs] = value;
    var boxtc = document.getElementById(id);
    if (value%1 == 0) {
        boxtc.value = value+'.00';
    }else{
        var decimales = value.toString().split('.')[1].length;
        if(decimales == 1){
            boxtc.value = value+'0';
        }
        if(decimales == 2){
            boxtc.value = value;
        }
    }
}
function saveSaldoEfectivo(divs){
    reglaCuadre[divs].salIni.value == '' ? reglaCuadre[divs].salIni.value = '0.0' : reglaCuadre[divs].salIni.value;
    var id = reglaCuadre[divs].id;
    var importeSaldo = parseFloat(reglaCuadre[divs].salIni.value);
    reglaCuadre[divs]["+"].forEach(cod =>{
        importeSaldo += datos[cod][1][divs][1];
    });
    reglaCuadre[divs]["-"].forEach(cod =>{
        importeSaldo = importeSaldo - datos[cod][1][divs][1];
    });
    reglaCuadre[divs].monto = importeSaldo;
    var saldoEfectivo = document.getElementById(id);
    saldoEfectivo.textContent = divisaFormat(importeSaldo,divs);
    reglaCuadre[divs].salShow.textContent = divisaFormat(importeSaldo,divs);
}
function saveDebeHaber(divs){
    dataDebeHaber[divs].salIni.value == '' ? dataDebeHaber[divs].salIni.value = '0.0' : dataDebeHaber[divs].salIni.value;
    var idD = dataDebeHaber[divs].idDebe;
    var idH = dataDebeHaber[divs].idHaber;
    var importeHaber = parseFloat(dataDebeHaber[divs].salIni.value);
    var importeDebe = 0.0;
    dataDebeHaber[divs].DEBE.forEach(cod => {
        importeDebe += datos[cod][1][divs][1];
    });
    dataDebeHaber[divs].HABER.forEach(cod => {
        importeHaber += datos[cod][1][divs][1];
    });
    var boxDebe = document.getElementById(idD);
    var boxHbaer = document.getElementById(idH);
    boxDebe.textContent = divisaFormat(importeDebe,divs);
    boxHbaer.textContent = divisaFormat(importeHaber,divs);
}
function saveCapture(){
    var captureArea = document.getElementById("body-cajaData");
    openCaja();
    html2canvas(captureArea).then(function(canvas) {
        // Convierte el canvas a un URL en formato de imagen
        var image = canvas.toDataURL("image/png");

        // Crea un enlace temporal
        var link = document.createElement('a');
        link.href = image;
        link.download = 'captura.png';

        // Automáticamente activa el clic para descargar la imagen
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Elimina el enlace temporal
    });
    closeCaja();
}
// RESTART --------------------------
function restarValues(){
    listCodigo.value = '';
    datoTipoTransac.textContent = 'TIPO DE TRANSACCIÓN';
    listTipoCuenta.value = '';
    datoNumCuenta.value = '';
    datoCuentaGira.value = '';
    datoNumCheque.value = '';
    listPlaza.value = '';
    listMoneda.value = '';
    datoImporte.value = '';
    datoComision.value = '';
}

// EJECUTABLES --------------------------------------
// PASAR DATOS A LISTAS --------------
Object.keys(datos).forEach(codigo => {
    const option = document.createElement('option');
    option.value = codigo;
    option.textContent = codigo;

    listCodigo.appendChild(option);

    if(celdasOcultas.includes(parseInt(codigo))){
        option.style.display = "none";
    }
});
tiposCuenta.forEach(cuenta => {
    const option = document.createElement('option');
    option.value = cuenta;
    option.textContent = cuenta;

    listTipoCuenta.appendChild(option);
})
plazas.forEach(plaza =>{
    const option = document.createElement('option');
    option.value = plaza;
    option.textContent = plaza;

    listPlaza.appendChild(option);
})
// PINTANDO TABLAS ----------------
// Tabla General Cuadre de Caja
Object.keys(datos).forEach(codigo => {
    // Capturamos el tbody
    var tablebody = tableGeneral.querySelector('tbody');
    // Creamos fila y celdas
    var tableRow = document.createElement('tr');
    var celda1 = document.createElement('td');
    var celda2 = document.createElement('td');
    var celda3 = document.createElement('td');
    var celda4 = document.createElement('td');
    // Asignamos Valores
    celda1.textContent = datos[codigo][0];
    celda2.id = datos[codigo][1].PEN[0];
    celda2.textContent = divisaFormat(datos[codigo][1].PEN[1],"PEN");
    celda3.id = datos[codigo][1].USD[0];
    celda3.textContent = divisaFormat(datos[codigo][1].USD[1],"USD");
    celda4.id = datos[codigo][1].EUR[0];
    celda4.textContent = divisaFormat(datos[codigo][1].EUR[1],"EUR");
    // Agregamos al DOM
    tableRow.appendChild(celda1);
    tableRow.appendChild(celda2);
    tableRow.appendChild(celda3);
    tableRow.appendChild(celda4);
    tablebody.appendChild(tableRow);
    // Comprobamos si son seldas oculas o no
    if(celdasOcultas.includes(parseInt(codigo))){
        tableRow.style.display = "none";
    }
});
// Tabla Codigos y Comisiones
Object.keys(datos).forEach(codigo =>{
    // Capturamos el tbody
    var tablebody = tableCodigos.querySelector('tbody');
    // Creamos filas y celdas
    var tableRow = document.createElement('tr');
    var celda1 = document.createElement('td');
    var celda2 = document.createElement('td');
    var celda3 = document.createElement('td');
    var celda4 = document.createElement('td');
    // Asignando Valores
    celda1.textContent = codigo;
    celda2.textContent = datos[codigo][0];
    celda3.textContent = divisaFormat(datos[codigo][2].PEN,"PEN");
    celda4.textContent = divisaFormat(datos[codigo][2].USD,"USD")
    // Agregamos al DOM
    tableRow.appendChild(celda1);
    tableRow.appendChild(celda2);
    tableRow.appendChild(celda3);
    tableRow.appendChild(celda4);
    tablebody.appendChild(tableRow);
    // Comprobamos si son seldas oculas o no
    if(celdasOcultas.includes(parseInt(codigo))){
        tableRow.style.display = "none";
    }
});
// Tabla Registro de Operaciones
function updateTableResults(codigo,texto){
    // Capturamos el tbody
    var tablebody = tableResults.querySelector('tbody');
    // Creamos filas y celdas
    var tableRow = document.createElement('tr');
    var celda1 = document.createElement('td');
    var celda2 = document.createElement('td');
    var celda3 = document.createElement('td');
    var celda4 = document.createElement('td');
    var celda5 = document.createElement('td');
    var celda6 = document.createElement('td');
    var celda7 = document.createElement('td');
    var celda8 = document.createElement('td');
    var celda9 = document.createElement('td');
    var celda10 = document.createElement('td');
    // Asignando Valores
    celda1.textContent = codigo;
    celda2.textContent = texto;
    celda3.textContent = listTipoCuenta.value;
    celda4.textContent = datoNumCuenta.value;
    celda5.textContent = datoCuentaGira.value;
    celda6.textContent = datoNumCheque.value;
    celda7.textContent = listPlaza.value;
    celda8.textContent = divisaFormat(datoImporte.value, listMoneda.value);
    celda9.textContent = divisaFormat(datoComision.value, listMoneda.value);
    celda10.textContent = divisaFormat((datoImporte.value * datos[listCodigo.value][3][listMoneda.value]),"PEN");
    // Agregamos al DOM
    tableRow.appendChild(celda1);
    tableRow.appendChild(celda2);
    tableRow.appendChild(celda3);
    tableRow.appendChild(celda4);
    tableRow.appendChild(celda5);
    tableRow.appendChild(celda6);
    tableRow.appendChild(celda7);
    tableRow.appendChild(celda8);
    tableRow.appendChild(celda9);
    tableRow.appendChild(celda10);
    tablebody.appendChild(tableRow);
}

// OPERATION ----------
function saveOP(){
    // Validamos que el importe no sea Null --------------------------------------------------
    datoImporte.value == '' ? datoImporte.value = '0.0' : datoImporte.value;

    // Validar saldo para operación-----------------------------------------------------------
    if(datos[listCodigo.value][5]){ //Evalua si es Compra
        // Obtener equivalente
        var equivalente = datoImporte.value * datos[listCodigo.value][3][listMoneda.value];
        // Verificar si existe saldo suficiente para la operación
        var isDesAproved = parseFloat(equivalente) > reglaCuadre["PEN"].monto;
        if(isDesAproved){
            // Detener la operación
            alert("SALDO INSUFICIENTE. REVISE SALDOS DE CAJA");
            restarValues();
            return '';
        }
        // Verificar si esta comprando SOLES
        if(listMoneda.value == "PEN"){
            console.log("Se esta evaluando si es compra");
            // Detener la operación
            alert("MONEDA INCORRECTA, NO PUEDES HACER UNA COMPRA EN SOLES");
            restarValues();
            return '';
        }
    }else{
        // Evaluar si es una operación que resta
        if(reglaCuadre[listMoneda.value]["-"].includes(parseInt(listCodigo.value))){
            // Verificar si existe saldo suficiente para la operación
            var isDesAproved = parseFloat(datoImporte.value) > reglaCuadre[listMoneda.value].monto;
            if(isDesAproved){
                // Detener la operación
                alert("SALDO INSUFICIENTE. REVISE SALDOS DE CAJA");
                restarValues();
                return '';
            }
        }
        // Verificar si esta vendiendo SOLES
        var esVenta = datos[listCodigo.value][4];
        if(esVenta && listMoneda.value == "PEN"){
            // Detener la operación
            alert("MONEDA INCORRECTA, NO PUEDES HACER UNA VENTA EN SOLES");
            restarValues();
            return '';
        }
    }

    // Registrar operaciones por tipo en Cuadre de Caja --------------------------------------
    // Identificamos el ID
    var id = datos[listCodigo.value][1][listMoneda.value][0];
    // Aumentamos el valor en DATOS
    datos[listCodigo.value][1][listMoneda.value][1] += (parseFloat(datoImporte.value) + datos[listCodigo.value][2][listMoneda.value]);
    var importe = datos[listCodigo.value][1][listMoneda.value][1];
    // Obtenemos la celda
    var containBox = document.getElementById(id);
    // Actualizamos el valor en Cuadre Caja
    containBox.textContent = divisaFormat(importe, listMoneda.value);
    // Actualizamos el Saldo Efectivo -------------------------------
    saveSaldoEfectivo(listMoneda.value);
    // Operamos con el DEBE y HABER ---------------------------------
    saveDebeHaber(listMoneda.value);

    // Operaciones con Venta y Compra --------------------------------------------------------
    var esVentaCompra = datos[listCodigo.value][4];
    if(esVentaCompra){
        // Obtenemos el equivalente
        var equivalente = datoImporte.value * datos[listCodigo.value][3][listMoneda.value];
        // Aumentamos el valor Soles en DATOS
        datos[listCodigo.value][1]["PEN"][1] += parseFloat(equivalente);
        var importeEquivalente = datos[listCodigo.value][1]["PEN"][1]
        // Obtenemos la celda
        var containBoxPen = document.getElementById(datos[listCodigo.value][1]["PEN"][0]);
        // Actualizamos el valor en Cuadre Caja
        containBoxPen.textContent = divisaFormat(importeEquivalente, "PEN");
        // Actualizamos el Saldo Efectivo --------------------------
        saveSaldoEfectivo("PEN");
        // Operamos con el DEBE y HABER ----------------------------
        saveDebeHaber("PEN");
    }
    // Registramos el Movimiento en Tabla Resultado ------------------------------------------
    updateTableResults(listCodigo.value,datoTipoTransac.textContent);
    // Limpiamos los campos de ingreso -------------------------------------------------------
    restarValues();
}

// REVERSA ------------------------------------------------------------------------------------------------------------
function reversaOP(){
    var inpt = document.getElementById('password-admin');
    var pswr = encrip(inpt.value);
    var cod = "cmV2ZXJzYQ==";
    var isAprovedClaveAdmin = pswr == color[cod][0];
    var secClave = document.getElementById('body-admin');
    secClave.style.display = 'none';
    inpt.value = '';
    
    if(isAprovedClaveAdmin){

        // Validamos que el importe no sea Null --------------------------------------------------
        datoImporte.value == '' ? datoImporte.value = '0.0' : datoImporte.value;

        // Validar saldo para operación-----------------------------------------------------------
        if(datos[listCodigo.value][6]){ //Evalua si es Venta
            // Obtener equivalente
            var equivalente = datoImporte.value * datos[listCodigo.value][3][listMoneda.value];
            // Verificar si existe saldo suficiente para la operación
            var isDesAproved = parseFloat(equivalente) > reglaCuadre["PEN"].monto;
            if(isDesAproved){
                // Detener la operación
                alert("SALDO INSUFICIENTE. REVISE SALDOS DE CAJA");
                restarValues();
                return '';
            }
            // Verificar si esta comprando SOLES
            if(listMoneda.value == "PEN"){
                // Detener la operación
                alert("MONEDA INCORRECTA, NO PUEDES REVERTIR UNA COMPRA EN SOLES");
                restarValues();
                return '';
            }
        }else{
            // Evaluar si es una operación que suma
            if(reglaCuadre[listMoneda.value]["+"].includes(parseInt(listCodigo.value))){
                // Verificar si existe saldo suficiente para la operación
                var isDesAproved = parseFloat(datoImporte.value) > reglaCuadre[listMoneda.value].monto;
                if(isDesAproved){
                    // Detener la operación
                    alert("SALDO INSUFICIENTE. REVISE SALDOS DE CAJA");
                    restarValues();
                    return '';
                }
            }
            // Verificar si esta vendiendo SOLES
            var esVenta = datos[listCodigo.value][4];
            if(esVenta && listMoneda.value == "PEN"){
                // Detener la operación
                alert("MONEDA INCORRECTA, NO PUEDES REVERTIR UNA VENTA EN SOLES");
                restarValues();
                return '';
            }
        }

        // Registrar operaciones por tipo en Cuadre de Caja --------------------------------------
        // Identificamos el ID
        var id = datos[listCodigo.value][1][listMoneda.value][0];
        // Aumentamos el valor en DATOS
        datos[listCodigo.value][1][listMoneda.value][1] += (parseFloat(datoImporte.value) + datos[listCodigo.value][2][listMoneda.value]) * -1;
        var importe = datos[listCodigo.value][1][listMoneda.value][1];
        // Obtenemos la celda
        var containBox = document.getElementById(id);
        // Actualizamos el valor en Cuadre Caja
        containBox.textContent = divisaFormat(importe, listMoneda.value);
        // Actualizamos el Saldo Efectivo -------------------------------
        saveSaldoEfectivo(listMoneda.value);
        // Operamos con el DEBE y HABER ---------------------------------
        saveDebeHaber(listMoneda.value);

        // Operaciones con Venta y Compra --------------------------------------------------------
        var esVentaCompra = datos[listCodigo.value][4];
        if(esVentaCompra){
            // Obtenemos el equivalente
            var equivalente = datoImporte.value * datos[listCodigo.value][3][listMoneda.value];
            // Aumentamos el valor Soles en DATOS
            datos[listCodigo.value][1]["PEN"][1] += parseFloat(equivalente) * -1;
            var importeEquivalente = datos[listCodigo.value][1]["PEN"][1]
            // Obtenemos la celda
            var containBoxPen = document.getElementById(datos[listCodigo.value][1]["PEN"][0]);
            // Actualizamos el valor en Cuadre Caja
            containBoxPen.textContent = divisaFormat(importeEquivalente, "PEN");
            // Actualizamos el Saldo Efectivo --------------------------
            saveSaldoEfectivo("PEN");
            // Operamos con el DEBE y HABER ----------------------------
            saveDebeHaber("PEN");
        }

        // Ingresar Nuevo código y texto
        var codigo = 1000;
        var texto = "REVERSA - "+datoTipoTransac.textContent;
        // Registramos el Movimiento en Tabla Resultado ------------------------------------------
        updateTableResults(codigo,texto);
        // Limpiamos los campos de ingreso -------------------------------------------------------
        restarValues();
    }else{
        alert("CONTRASEÑA INCORRECTA");
    }
}
