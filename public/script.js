// Manejador del formulario de inicio de sesión
document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });
  
    const data = await response.json();
  
    if (response.ok) {
      alert("Inicio de sesión exitoso!");
      console.log("Token:", data.token);
      // Aquí puedes redirigir al dashboard de inmuebles o almacenar el token
    } else {
      alert("Error: " + data.message);
    }
  });
  
  // Manejador del formulario de registro
  document.getElementById("register-form").addEventListener("submit", async function (event) {
    event.preventDefault();
  
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
  
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });
  
    const data = await response.json();
  
    if (response.ok) {
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
    } else {
      alert("Error: " + data.message);
    }
  });  