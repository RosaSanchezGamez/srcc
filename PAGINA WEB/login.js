
const url = "http://localhost:3001/api/login/";
let resultados = '';
const formArticulo = document.querySelector("form#formulario");

const usuarioForm = document.getElementById("usuario");

const contraseniaForm = document.getElementById("contrasenia");

btnLogin.addEventListener('click', () => {
    console.log("Accionar de login activada");
    opcion = 'login';
});

formArticulo.addEventListener("submit", (e) => {
    e.preventDefault();
    if (opcion == 'login') {
        if (usuarioForm.value == "" || contraseniaForm.value == "" ) {
        alert("Asegúrese de que todos los campos estén completos");
        return false;
    } else {
        console.log("Todos los campos están completos");
        fetch(
            "http://localhost:3001/api/login",
            {
                method: 'POST',
                headers: {
                    'content-Type':'application/json'
                },
                body: JSON.stringify(
                    {
                        usuario: usuarioForm.value,
                        contrasenia: contraseniaForm.value,
                    }
                )
            }
        )
        .then((data) =>  data.json())
        .then(data => {
            if (data.authenticated) {
                window.location = "paginaWeb.html";
            } else {
                alert("Datos incorrectos")
            }
        })
    }
} 

});
