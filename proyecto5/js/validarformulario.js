document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("#form1");
    formulario.addEventListener("submit", validarFormulario);
});
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("#form2");
    formulario.addEventListener("submit", validarFormulario2);
});
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("#form3");
    formulario.addEventListener("submit", validarFormulario3);
});
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("#form4");
    formulario.addEventListener("submit", validarFormulario4);
});
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("#form5");
    formulario.addEventListener("submit", validarFormulario5);
});
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("#form6");
    formulario.addEventListener("submit", validarFormulario6);
});
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("#form7");
    formulario.addEventListener("submit", validarFormulario7);
});
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("#form8");
    formulario.addEventListener("submit", validarFormulario8);
});
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("#form9");
    formulario.addEventListener("submit", validarFormulario9);
});
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("#form10");
    formulario.addEventListener("submit", validarFormulario10);
});
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("#form11");
    formulario.addEventListener("submit", validarFormulario11);
});
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector("#form12");
    formulario.addEventListener("submit", validarFormulario12);
});

function validarFormulario(e) {
    e.preventDefault();
    const nombre = document.querySelector("#vnombre1").value;
    const apellido = document.querySelector("#vapellido1").value;
    const nacionalidad = document.querySelector("#vnacionalidad1").value;
    const respuesta = document.getElementById("respuesta1");
    respuesta.textContent = `Hola ${nombre} ${apellido}, tiene la nacionalidad de ${nacionalidad}`;
    window.open('1.html','_blank');
}

function validarFormulario2(e) {
    e.preventDefault();
    const nombre = document.querySelector("#vnombre2").value;
    const apellido = document.querySelector("#vapellido2").value;
    const nacionalidad = document.querySelector("#vnacionalidad2").value;
    const respuesta = document.getElementById("respuesta2");
    respuesta.textContent = `Hola ${nombre} ${apellido}, tiene la nacionalidad de ${nacionalidad}`;
    window.open('1.html','_blank');
}

function validarFormulario3(e) {
    e.preventDefault();
    const nombre = document.querySelector("#vnombre3").value;
    const apellido = document.querySelector("#vapellido3").value;
    const nacionalidad = document.querySelector("#vnacionalidad3").value;
    const respuesta = document.getElementById("respuesta3");
    respuesta.textContent = `Hola ${nombre} ${apellido}, tiene la nacionalidad de ${nacionalidad}`;
    window.open('1.html','_blank')
}

function validarFormulario4(e) {
    e.preventDefault();
    const nombre = document.querySelector("#vnombre4").value;
    const apellido = document.querySelector("#vapellido4").value;
    const nacionalidad = document.querySelector("#vnacionalidad4").value;
    const respuesta = document.getElementById("respuesta4");
    respuesta.textContent = `Hola ${nombre} ${apellido}, tiene la contraseña de ${nacionalidad}`;
    window.open('1.html','_blank')
}

function validarFormulario5(e) {
    e.preventDefault();
    const nombre = document.querySelector("#vnombre5").value;
    const apellido = document.querySelector("#vapellido5").value;
    const nacionalidad = document.querySelector("#vnacionalidad5").value;
    const respuesta = document.getElementById("respuesta5");
    respuesta.textContent = `Hola ${nombre} ${apellido}, y su numero es ${nacionalidad}`;
    window.open('1.html','_blank')
}

function validarFormulario6(e) {
    e.preventDefault();
    const nombre = document.querySelector("#vnombre6").value;
    const apellido = document.querySelector("#vapellido6").value;
    const nacionalidad = document.querySelector("#vnacionalidad6").value;
    const respuesta = document.getElementById("respuesta6");
    respuesta.textContent = `Hola ${nombre} ${apellido}, y la fecha es ${nacionalidad}`;
    window.open('1.html','_blank')
}

function validarFormulario7(e) {
    e.preventDefault();
    const nombre = document.querySelector("#vnombre7").value;
    const apellido = document.querySelector("#vapellido7").value;
    const hora = document.querySelector("#vhora7").value;
    const respuesta = document.getElementById("respuesta7");
    respuesta.textContent = `Hola ${nombre} ${apellido}, la hora seleccionada es ${hora}.`;
    window.open('1.html','_blank')
}

function validarFormulario8(e) {
    e.preventDefault();
    const nombre = document.querySelector("#vnombre8").value;
    const apellido = document.querySelector("#vapellido8").value;
    const checkbox1 = document.querySelector("#opcion1").checked;
    const checkbox2 = document.querySelector("#opcion2").checked;
    const checkbox3 = document.querySelector("#opcion3").checked;
    const respuesta = document.getElementById("respuesta8");
    let checkboxesMarcados = [];
    if (checkbox1) checkboxesMarcados.push("Opción 1");
    if (checkbox2) checkboxesMarcados.push("Opción 2");
    if (checkbox3) checkboxesMarcados.push("Opción 3");
    let mensaje = `Hola ${nombre} ${apellido}.`;
    if (checkboxesMarcados.length > 0) {
        mensaje += ` Has marcado los siguientes checkboxes: ${checkboxesMarcados.join(", ")}.`;
    } else {
        mensaje += ` No has marcado ningún checkbox.`;
    }
    respuesta.textContent = mensaje;
    window.open('1.html','_blank')
}

function validarFormulario9(e) {
    e.preventDefault();
    const nombre = document.querySelector("#vnombre9").value;
    const apellido = document.querySelector("#vapellido9").value;
    const opcion1 = document.querySelector("#opcion4").checked;
    const opcion2 = document.querySelector("#opcion5").checked;
    const opcion3 = document.querySelector("#opcion6").checked;
    const respuesta = document.getElementById("respuesta9");
    let opcionSeleccionada = "";
    if (opcion1) {
        opcionSeleccionada = "Opción 1";
    } else if (opcion2) {
        opcionSeleccionada = "Opción 2";
    } else if (opcion3) {
        opcionSeleccionada = "Opción 3";
    }
    let mensaje = `Hola ${nombre} ${apellido}. `;
    if (opcionSeleccionada !== "") {
        mensaje += `Has seleccionado la opción: ${opcionSeleccionada}.`;
    } else {
        mensaje += `No has seleccionado ninguna opción.`;
    }
    respuesta.textContent = mensaje;
    window.open('1.html','_blank')
}

function validarFormulario10(e) {
    e.preventDefault();
    const nombre = document.querySelector("#vnombre10").value;
    const apellido = document.querySelector("#vapellido10").value;
    const opcion = document.querySelector("#opcion").value;
    const respuesta = document.getElementById("respuesta10");
    let mensaje = `Hola ${nombre} ${apellido}. `;
    if (opcion !== "") {
        mensaje += `Has seleccionado la opción: ${opcion}.`;
    } else {
        mensaje += `No has seleccionado ninguna opción.`;
    }
    respuesta.textContent = mensaje;
    window.open('1.html','_blank')
}

function validarFormulario11(e) {
    e.preventDefault();
    const nombre = document.querySelector("#vnombre11").value;
    const apellido = document.querySelector("#vapellido11").value;
    const opcion = document.querySelector("#opcion").value;
    const comentarios = document.querySelector("#comentarios").value;
    const respuesta = document.getElementById("respuesta11");
    let mensaje = `Hola ${nombre} ${apellido}. `;
    
    if (comentarios.trim() !== "") {
        mensaje += `Tus comentarios son: ${comentarios}`;
    } else {
        mensaje += `No has ingresado comentarios adicionales.`;
    }
    respuesta.textContent = mensaje;
    window.open('1.html','_blank')
}

function validarFormulario12(e) {
    e.preventDefault();
    const nombre = document.querySelector("#vnombre12").value;
    const apellido = document.querySelector("#vapellido12").value;
    const nivel = document.querySelector("#nivel").value;
    const respuesta = document.getElementById("respuesta12");

    let nivelTexto;
    switch (nivel) {
        case "1":
            nivelTexto = "Malo";
            break;
        case "2":
            nivelTexto = "Regular";
            break;
        case "3":
            nivelTexto = "Bueno";
            break;
        default:
            nivelTexto = "Desconocido";
    }
    let mensaje = `Hola ${nombre} ${apellido}. `;
    mensaje += `Tu nivel es ${nivelTexto}.`;
    respuesta.textContent = mensaje;
    window.open('1.html','_blank')
}