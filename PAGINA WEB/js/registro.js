const url = "http://localhost/api/formulario/";
let resultados = '';
const formArticulo = document.querySelector("form#formulario");

const sresForm = document.getElementById("sres");

const usuarioForm = document.getElementById("usuario");

const contraseniaForm = document.getElementById("contrasenia");

const correoForm = document.getElementById("correo");

const fechadeNacimientoForm = document.getElementById("fechadeNacimiento");



var opcion = '';

btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'crear';
});

formArticulo.addEventListener('submit',
    (e) => {
   	 e.preventDefault();
   	 if (opcion == 'crear') {
   		 if (sresForm.value == "" || usuarioForm.value == "" || contraseniaForm.value == "" || correoForm.value == "" || fechadeNacimientoForm.value == "") {
            alert("Asegúrese de que todos los campos estén completos");
            return false;
        } else {
            console.log("Todos los campos están completos");
            fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'content-Type':'application/json'
                    },
                    body: JSON.stringify(
                        {
                            sres: sresForm.value,
                            nombres: usuarioForm.value,
                            contrasenia: contraseniaForm.value,
                            correo: correoForm.value,
                            fechaNacimiento: fechadeNacimientoForm.value,
                            
                        }
                    )
                }
            )
            .then(
                response => response.json()
            )
            .then(
                response => location.reload()
            );
        }
    } else if(opcion == 'editar'){
        console.log("Activado el ");
    }
}
);
