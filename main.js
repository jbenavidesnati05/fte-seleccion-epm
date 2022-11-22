
const llenarTabla = document.querySelector("#lista-tabla");

function calcular(){
    const cantProcesos =parseFloat( document.getElementById("cantProcesos").value);
    console.log("cantidad de procesos = ",cantProcesos);

    const reclutamiento = (parseInt(cantProcesos)/15).toFixed(2)
    console.log(reclutamiento);

    document.getElementById('resultadosPreseleccion').innerHTML = ` <h6>La cantidad de personas para <strong>Reclutamiento</strong> son: ${reclutamiento}</h6>`;
    const preseleccion = (parseInt(cantProcesos)/25).toFixed(2)
    document.getElementById('resultadosReclutamiento').innerHTML = ` <h6>La cantidad de personas para <strong>Preselección</strong> son: ${preseleccion}</h6>`;

    const aplicacionPruebas = (parseInt(cantProcesos)/13).toFixed(2)
    document.getElementById('aplicacionPruebas').innerHTML = ` <h6>La cantidad de personas para <strong>Apicación de pruebas</strong> son: ${aplicacionPruebas}</h6>`;
    console.log(aplicacionPruebas);
    
    const valoracion = (parseInt(cantProcesos)/14).toFixed(2)
    document.getElementById('valoracion').innerHTML = ` <h6>La cantidad de personas para <strong>Valoración</strong> son: ${valoracion}</h6>`;
    console.log(aplicacionPruebas);
    
    const actFinales = (parseInt(cantProcesos)/49).toFixed(2)
    document.getElementById('actFinales').innerHTML = ` <h6>La cantidad de personas para <strong>Actividades finales </strong> son: ${actFinales}</h6>`;
    console.log(aplicacionPruebas);

    const vinculacion = (parseInt(cantProcesos)/39).toFixed(2)
    document.getElementById('vinculacion').innerHTML = ` <h6r>La cantidad de personas para <strong>Vinculación</strong> son: ${vinculacion}</h6r>`;
    console.log(aplicacionPruebas);

    const total = ((parseInt(cantProcesos)/15)+(parseInt(cantProcesos)/25)+(parseInt(cantProcesos)/13)+(parseInt(cantProcesos)/14)+(parseInt(cantProcesos)/49)+(parseInt(cantProcesos)/39)).toFixed(2);
    console.log(total,"total");
    document.getElementById('total').innerHTML = ` <h5> El total de personas requeridas son: ${total}</h5>`;
    console.log(aplicacionPruebas);


}




