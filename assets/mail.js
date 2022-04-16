

function mailto() {

    let nombre = document.getElementsByName("name")[0].value
    let sub = document.getElementsByName("subject")[0].value
    let rut = document.getElementsByName("rut")[0].value
    let email = document.getElementsByName("email")[0].value
    let telefono = document.getElementsByName("phone")[0].value
    let body = document.getElementsByName("body")[0].value

    window = window.open('mailto:rectificatudisco@gmail.cl?subject=' + sub + '&body=nombre: ' + nombre + '%0Arut: ' + rut + '%0Atelefono: ' + telefono + '%0Amensaje: ' + body, 'emailWindow')
}

$(document).ready(function($) {
    $(document).on('submit', '#contactForm', function(event) {
      event.preventDefault();
    });
});