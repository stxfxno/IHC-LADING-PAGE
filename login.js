document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const correo = document.getElementById("correoLogin").value;
    const contrasena = document.getElementById("contrasenaLogin").value;

    // Obtener los datos almacenados
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Validar las credenciales
    const foundUser = usuarios.find(
        (user) => user.correo === correo && user.contrasena === contrasena
    );

    if (foundUser) {
        alert("Inicio de sesión exitoso.");
        window.location.href = "infogeneral.html";
    } else {
        alert("Correo o contraseña incorrectos. Inténtalo de nuevo.");
    }
});

function handleMouseMove(event) {
    const body = document.querySelector("body");
    const mouseX = event.clientX / body.clientWidth * 100;
    const mouseY = event.clientY / body.clientHeight * 100;
    body.style.backgroundPosition = `${mouseX}% ${mouseY}%`;
}
