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
    alert("Registro agregado correctamente");
    limpiarFormulario();
  } else {
    alert("Por favor, complete todos los campos");
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
    document.getElementById('result').innerText = "Resultado: No se encontró la persona con la cédula ingresada";
  }
}
