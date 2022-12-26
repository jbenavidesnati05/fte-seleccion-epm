function calcular(){
    const cantProcesos = (document.getElementById("cantProcesos").value);
    
    if (cantProcesos == "") {
        alert("Ingresar una cantidad de procesos")
        
    } else {
        const reclutamiento     = (parseInt(cantProcesos)/15).toFixed(2)
        const preseleccion      = (parseInt(cantProcesos)/25).toFixed(2)
        const aplicacionPruebas = (parseInt(cantProcesos)/13).toFixed(2)
        const valoracion        = (parseInt(cantProcesos)/14).toFixed(2)
        const actFinales        = (parseInt(cantProcesos)/49).toFixed(2)
        const vinculacion       = (parseInt(cantProcesos)/39).toFixed(2)

        const total = ((parseInt(cantProcesos)/15)+(parseInt(cantProcesos)/25)+(parseInt(cantProcesos)/13)+(parseInt(cantProcesos)/14)+(parseInt(cantProcesos)/49)+(parseInt(cantProcesos)/39)).toFixed(2);
        document.getElementById('total').innerHTML = ` <h6 class="alert alert-success mt-3"> El total de personas requeridas son: ${total}</h6>`;
        
        document.getElementById('tabla').innerHTML = 
        `
        <div class="row">
        <div class="col">
          <table class="table table-success">
            <thead>
              <tr>
                <th>Proceso</th>
                <th>Cantidad de Personas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reclutamiento</td>
                <td>${reclutamiento}</td>
              </tr>
              <tr>
                <td>Preselección</td>
                <td>${preseleccion}</td>
              </tr>
              <tr>
                <td>Aplicación de pruebas</td>
                <td>${aplicacionPruebas}</td>
              </tr>
              <tr>
                <td>Valoración</td>
                <td>${valoracion}</td>
              </tr>
              <tr>
                <td>Actividades Finales</td>
                <td>${actFinales}</td>
              </tr>
              <tr>
                <td>Vinculación</td>
                <td>${vinculacion}</td>
              </tr>
            </tbody>
          </table>

        `
        ;


    }



}




