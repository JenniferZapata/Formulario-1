document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitBtn').addEventListener('click', submitForm);
    document.getElementById('clearBtn').addEventListener('click', clearForm);
});

function submitForm() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var ciudad = document.getElementById('ciudad').value;
    var intereses = document.getElementById('intereses').value;

    var output = "Nombre: " + nombre + "<br>Apellido: " + apellido + "<br>Edad: " + edad +
                  "<br>Correo Electrónico: " + email + "<br>Teléfono: " + telefono +
                  "<br>Ciudad: " + ciudad + "<br>Intereses: " + intereses;

    document.getElementById('output').innerHTML = output;
    openModal();
}

function clearForm() {
    document.getElementById('dataForm').reset();
}

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
