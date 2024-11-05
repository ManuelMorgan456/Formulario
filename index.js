// Array para almacenar los registros
const registros = [];

// Función para agregar un registro al array
function agregarRegistro() {
  const cedula = document.getElementById('cedula').value;
  const nombre = document.getElementById('nombre').value;
  const apellidos = document.getElementById('apellidos').value;
  const direccion = document.getElementById('direccion').value;
  const telefono = document.getElementById('telefono').value;

  if (cedula && nombre && apellidos && direccion && telefono) {
    const persona = { cedula, nombre, apellidos, direccion, telefono };
    registros.push(persona);
    
    // SweetAlert2 para confirmar que el registro fue agregado
    Swal.fire({
      icon: 'success',
      title: 'Registro Agregado',
      text: 'La persona ha sido registrada correctamente.',
      showConfirmButton: true,
      timer: 2000
    });

    limpiarFormulario();
  } else {
    // SweetAlert2 para advertir sobre campos incompletos
    Swal.fire({
      icon: 'warning',
      title: 'Campos Incompletos',
      text: 'Por favor, complete todos los campos.',
      showConfirmButton: true
    });
  }
}

// Función para limpiar el formulario después de agregar un registro
function limpiarFormulario() {
  document.getElementById('cedula').value = '';
  document.getElementById('nombre').value = '';
  document.getElementById('apellidos').value = '';
  document.getElementById('direccion').value = '';
  document.getElementById('telefono').value = '';
}

// Función para buscar un registro por cédula y mostrar los datos
function buscarRegistro() {
  const cedulaBusqueda = document.getElementById('buscarCedula').value;
  const persona = registros.find(reg => reg.cedula === cedulaBusqueda);

  if (persona) {
    document.getElementById('result').innerText = `Resultado: 
    
    Nombre: ${persona.nombre}, 
    Apellidos: ${persona.apellidos}, 
    Dirección: ${persona.direccion}, 
    Teléfono: ${persona.telefono}`;
  } else {
    // SweetAlert2 para indicar que la persona no fue encontrada
    Swal.fire({
      icon: 'error',
      title: 'No Encontrado',
      text: 'No se encontró la persona con la cédula ingresada.',
      showConfirmButton: true
    });
  }
}
