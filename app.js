
const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener( "submit", validarFormulario )

// Expresiones regulares
var nombreApellidoRegex = /^[a-zA-Z\s]+$/;
var cédulaRegex = /^\d{9}$/;
var especialidadRegex = /^[a-zA-Z\s]+$/;
var consultorioRegex = /^\w+$/;
var correoRegex = /^\S+@\S+\.\S+$/



// funciones DOCTOR
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const apellido = document.querySelector("#apellido").value
    const cedula = document.querySelector('#cedula').value
    const especialidad = document.querySelector('#especialidad').value
    const consultorio = document.querySelector('#consultorio').value
    const email = document.querySelector('#email').value

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Su Nombre es: ${nombre} •su apellido es:   ${apellido} •cedula N°: ${cedula} 
    •su especialidad es : ${especialidad} •su consultorio es el: ${consultorio} •email : ${email}`
}

//Funcion  reiniciar doctor
function reiniciarFormulario() {
    document.getElementById("formulario").reset();
  }



/*----------------------------------------------------------------------------------------------------------------------------------------------------*/ 
//Funcion paciente 

const formularioP = document.querySelector("#formularioP");

//crear el evento
formularioP.addEventListener( "submit", validarFormularioP )

function validarFormularioP(i){
    i.preventDefault();
    const nombreP = document.querySelector("#nombreP").value
    const apellidoP = document.querySelector("#apellidoP").value
    const cedulaP = document.querySelector('#cedulaP').value
    const telefono = document.querySelector('#telefono').value
    const especialidadP = document.querySelector('#especialidadP').value
    const edad = document.querySelector('#edad').value
    

    const respuesta = document.getElementById("respuesta");
    respuesta.textContent =`Su Nombre es: ${nombreP} •su apellido es:   ${apellidoP} •cedula N°: ${cedulaP} 
    •su edad es : ${edad} •su telefono es: ${telefono} •su especialidad es : ${especialidadP}`
}

//Funcion  reiniciar paciente
function reiniciarFormularioP() {
    document.getElementById("formularioP").reset();
  }

  

//objeto con los datos del doctor
var doctor = {
    nombre: nombre,
    apellido: apellido,
    cedula: cedula,
    especialidad: especialidad,
    consultorio: consultorio,
    email: email
};


// Convertir el objeto a JSON
var doctorJSON = JSON.stringify(doctor);



    
