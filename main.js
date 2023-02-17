function calcular(){
    const cantProcesos = (document.getElementById("cantProcesos").value);
    const filial = (document.getElementById("filial").value);
    
  if(cantProcesos == ""){
    alert("Por favor ingresar la cantidad de procesos")
  }else{
    if(filial == "epm") {
      const reclutamientoPre  = (parseInt(cantProcesos)/25).toFixed(2)
      const aplicacionPruebas = (parseInt(cantProcesos)/39).toFixed(2)
      const valoracion        = (parseInt(cantProcesos)/27).toFixed(2)
      const actFinales        = (parseInt(cantProcesos)/101).toFixed(2)
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
              <th>EPM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reclutamiento y Preselección</td>
              <td>${reclutamientoPre}</td>
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
  else if(filial == "cens"){
    const reclutamientoPre  = (parseInt(cantProcesos)/29).toFixed(2)
    const aplicacionPruebas = (parseInt(cantProcesos)/39).toFixed(2)
    const valoracion        = (parseInt(cantProcesos)/27).toFixed(2)
    const actFinales        = (parseInt(cantProcesos)/101).toFixed(2)
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
            <th>CENS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reclutamiento y Preselección</td>
            <td>${reclutamientoPre}</td>
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
  else if(filial == "chec"){
    const reclutamientoPre  = (parseInt(cantProcesos)/29).toFixed(2)
    const aplicacionPruebas = (parseInt(cantProcesos)/39).toFixed(2)
    const valoracion        = (parseInt(cantProcesos)/27).toFixed(2)
    const actFinales        = (parseInt(cantProcesos)/101).toFixed(2)
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
            <th>CHEC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reclutamiento y Preselección</td>
            <td>${reclutamientoPre}</td>
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
  else if(filial == "edeq"){
    const reclutamientoPre  = (parseInt(cantProcesos)/29).toFixed(2)
    const aplicacionPruebas = (parseInt(cantProcesos)/39).toFixed(2)
    const valoracion        = (parseInt(cantProcesos)/27).toFixed(2)
    const actFinales        = (parseInt(cantProcesos)/101).toFixed(2)
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
            <th>EDEQ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reclutamiento y Preselección</td>
            <td>${reclutamientoPre}</td>
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
  else if(filial == "essa"){
    const reclutamientoPre  = (parseInt(cantProcesos)/29).toFixed(2)
    const aplicacionPruebas = (parseInt(cantProcesos)/39).toFixed(2)
    const valoracion        = (parseInt(cantProcesos)/27).toFixed(2)
    const actFinales        = (parseInt(cantProcesos)/101).toFixed(2)
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
            <th>ESSA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reclutamiento y Preselección</td>
            <td>${reclutamientoPre}</td>
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
  else if(filial == "afinia"){
    const reclutamientoPre  = (parseInt(cantProcesos)/19).toFixed(2)
    const aplicacionPruebas = (parseInt(cantProcesos)/39).toFixed(2)
    const valoracion        = (parseInt(cantProcesos)/27).toFixed(2)
    const actFinales        = (parseInt(cantProcesos)/101).toFixed(2)
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
            <th>AFINIA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reclutamiento y Preselección</td>
            <td>${reclutamientoPre}</td>
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

}




