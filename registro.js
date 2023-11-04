document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    // Almacenar los datos en el almacenamiento local
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    usuarios.push({
        usuario: usuario,
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contrasena: contrasena
    });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cuenta creada correctamente.");
    window.location.href = "index.html";
});
