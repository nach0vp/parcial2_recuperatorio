// Tomo los elementos del formulario

let inputCantidad = document.querySelector("#cantInstalacion");
let inputNombre = document.querySelector("#nombre");
let inputPersonas = document.querySelector("#personas");
let inputDias = document.querySelector("#dias");
let inputTrabajo = document.querySelector("#trabajo");
let inputHonorario = document.querySelector("#honorario");

// Tomo los botones

let btnComenzar = document.querySelector("#comenzar");
let btnAgregar = document.querySelector("#btnAgregar");
let btnCalcular = document.querySelector("#btnCalcular");
let btnReiniciar = document.querySelector("#btnReiniciar");

// Al principio algunos botones están deshabilitados, esto lo hice usando la IA, este metodo no lo conocia y le pedia ayuda a como hacer esto

btnAgregar.disabled = true;
btnCalcular.disabled = true;
btnReiniciar.disabled = true;


// BOTÓN COMENZAR
let cantidadInstalaciones = 0;

btnComenzar.addEventListener("click", function(){
    cantidadInstalaciones = Number(inputCantidad.value); // tomo el valor puesto por el usuario en cantidad de instalaciones a producir

    if (cantidadInstalaciones <= 0){
        alert("Ingrese una cantidad válida de instalaciones.");
        return;
    } //alerta por si pone un valor no valido

    btnAgregar.disabled = false;
    inputCantidad.disabled = true;
    btnComenzar.disabled = true;// Activar el boton de agregar y desactivar el de comenzar
});


// BOTÓN AGREGAR OBRA
let instaUsuario = []; //declaro array vacio para despues poner los que ponga el usuario

btnAgregar.addEventListener("click", function(){
    let nombre = inputNombre.value;
    let personas = Number(inputPersonas.value);
    let dias = Number(inputDias.value); // tomo los valores puestos por el usuario en el formulario

    if (nombre=="" || personas<=0 || dias<=0){
        alert("Complete correctamente los datos.");
        return; // alerta cada que ponga una obra nueva
    }

    let instalacion = {
        nombre: nombre,
        personas: personas,
        dias: dias
    };// obheto creado con los valores puesto x el usuario en el formulario

    instaUsuario.push(instalacion); // agregando el obheto en el array vacio
    alert("Instalacion agregada"); //alerta que avisa que se guardo la obra

    inputNombre.value = "";
    inputPersonas.value = "";
    inputDias.value = "";
// Esto de arriba es para que despues de apretar agregar obra y se haya guardado los datos, se borre lo que escribio el usuario para que se pueda volver a escribir

    if (instaUsuario.length == cantidadInstalaciones){
        btnAgregar.disabled = true;
        btnCalcular.disabled = false;// desactivar el boton de agregar y activar el de calcular
    }
});


// BOTÓN CALCULAR
btnCalcular.addEventListener("click", function(){
    let trabajo = Number(inputTrabajo.value);
    let honorario = Number(inputHonorario.value); // tomar los valores puestos en formulario

    if (trabajo<=0 || trabajo>24 || honorario<=0){
        alert("Complete correctamente los datos.");
        return; //alerta por si pone un valor equivocado
    }

    // primer resultado
    let totalPersonas = 0;

    for (let i = 0; i<instaUsuario.length; i++){
        totalPersonas += instaUsuario[i].personas;
    } //estructura repetitiva para poner el valor total de las personas en la variable

    let costoDia = totalPersonas * trabajo * honorario;


    // segundo resultado
    let mayorDias = 0;
    let nombreMayor = "";
    let personasMayor = 0;

    for (let i = 0; i<instaUsuario.length; i++){
        if (instaUsuario[i].dias > mayorDias){
            mayorDias = instaUsuario[i].dias;
            nombreMayor = instaUsuario[i].nombre;
            personasMayor = instaUsuario[i].personas; // estructura repetitiva para descubrir cual es la obra con mas dias y mas costo
        }
    }

    let costoMayor = personasMayor * mayorDias * trabajo * honorario;


    // tercer resultado
    let costoTotal = 0;

    for (let i = 0; i<instaUsuario.length; i++){
        costoTotal += instaUsuario[i].personas * instaUsuario[i].dias * trabajo * honorario; 
    }

    let porcentaje = Math.round((costoMayor / costoTotal) * 100);//estructura repetitiva para el valor del porcentage de la instalacion mayor sobre el costo total


    /* Mostrar los resultados */
    let resultado1 = document.querySelector("#resultado1");
    resultado1.innerHTML = "El costo total de un día de trabajo es de $" + costoDia + ".";

    let resultado2 = document.querySelector("#resultado2");
    resultado2.innerHTML = "La instalación que necesita más días de producción es " + nombreMayor + ", con " + mayorDias + " días. Su costo total es de $" + costoMayor + ".";

    let resultado3 = document.querySelector("#resultado3");
    resultado3.innerHTML = "El costo de " + nombreMayor + " representa el " + porcentaje + "% del costo total de producción de todas las instalaciones.";

    btnReiniciar.disabled = false; //boton de reinicio activado
});


// BOTÓN REINICIAR, aca tambien utilice la IA, chat gpt, para resolver esto del boton de reinicio ya que yo iba a poner para que borre toda la informacion puesta x el usuario pero me complique mucho, asi que la IA me meciono usar este metodo

btnReiniciar.addEventListener("click", function(){
    location.reload();
});