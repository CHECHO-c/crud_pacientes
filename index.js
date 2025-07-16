const url = "https://apipacientes.proyectosadso.com/api/";
const mdlAgrPaciente = new bootstrap.Modal('#mdlAgrPaciente');
const mdlEditarAprendiz = new bootstrap.Modal('#mdlEditarPaciente');



async function obtenerDatos(url) {
    try {
        const response = await fetch(url + "get_all.php", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        return data.data

    }
    catch (error) {
        console.log(error);
    }

}



function llenartabla(usuarios) {
    const tbody = document.querySelector("#datosAprendices");
   tbody.innerHTML="";
    usuarios.forEach(usuario => {
        let tr = document.createElement("tr");

        let datosUsuario={
        id:usuario.id,    
        name:usuario.name,
        age:usuario.age,
        gender:usuario.gender,
        diagnosis:usuario.diagnosis
        }

        //Datos del usuario en TDATA's
        let tdId = document.createElement("td");
        let tdNombre = document.createElement("td");
        let tdEdad = document.createElement("td");
        let tdGenero = document.createElement("td");
        let tdDiagnos = document.createElement("td");
        let tdFecha = document.createElement("td");
        let tdBtnEditar = document.createElement("td");
        let tdBtnEliminar = document.createElement("td");

        let btnEditar = document.createElement("button");

        let btnEliminar = document.createElement("button");

        btnEditar.classList.add("btn", "btn-dark", "btnEditar")
        btnEliminar.classList.add("btn", "btn-secondary", "btnEliminar")
        

        btnEditar.innerText = "Editar";
        btnEliminar.innerText = "Eliminar";


        btnEditar.addEventListener("click", () => {

            
            abrirModalEditar(usuario.id, JSON.stringify(datosUsuario));
        });

        btnEliminar.addEventListener("click", () => {
            eliminarPaciente(usuario.id);

        });

        tdId.innerText = usuario.id;
        tdNombre.innerText = usuario.name;
        tdEdad.innerText = usuario.age;
        tdGenero.innerText = usuario.gender;
        tdDiagnos.innerText = usuario.diagnosis;
        tdFecha.innerText = usuario.created_at;
        tdBtnEditar.appendChild(btnEditar);
        tdBtnEliminar.appendChild(btnEliminar);


        tr.appendChild(tdId);
        tr.appendChild(tdNombre);
        tr.appendChild(tdEdad);
        tr.appendChild(tdGenero);
        tr.appendChild(tdDiagnos);
        tr.appendChild(tdFecha);
        tr.appendChild(tdBtnEditar);
        tr.appendChild(tdBtnEliminar);

        tbody.appendChild(tr);
    });


}

document.addEventListener("DOMContentLoaded", async function () {
    datosPaciente = await obtenerDatos(url);
    llenartabla(datosPaciente);

    $(document).ready(function () {
        $('#tblAprendices').DataTable();
    });


});



const btnAgrPaciente = document.querySelector("#btnAgregar").addEventListener('click', () => {
    mdlAgrPaciente.show();
})



const cfrAgregarPaciente = document.querySelector("#cfrAgregarPaciente").addEventListener('click', async function () {



    const datos = obteneDatos();
    const response = await agregarPaciente(url, datos)



    if (response.success) {
        Swal.fire({
            title: "Agregado con exito!",
            text: "Maravilloso!",
            icon: "success"
        });
    }
});


function obteneDatos() {
    const iptNombre = document.querySelector("#nombrePaciente");
    const iptEdad = document.querySelector("#edadPaciente");
    const iptGenero = document.querySelector("#generoPaciente");
    const iptDiagnostico = document.querySelector("#diagnosticoPaciente");


    let datosPaciente = {

        name: iptNombre.value,
        age: iptEdad.value,
        gender: iptGenero.value,
        diagnosis: iptDiagnostico.value,

    }

    return datosPaciente;
}

async function agregarPaciente(url, datos) {
    try {
        const response = await fetch(url + "create.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })


        const data = await response.json();
        mdlAgrPaciente.hide();
        return data;


    } catch (err) {
        console.log(err);
    }




}



function abrirModalEditar(id,usuarios) {

    const usuario = JSON.parse(usuarios);
    const modalEditar = document.getElementById("mdlEditarPaciente");
    mdlEditarAprendiz.show();


    let h1Id = document.createElement("h3");
    h1Id.innerText = " ID: " + id;

    let mdlTitulo = modalEditar.querySelector(".modal-title");
    mdlTitulo.innerText = "Editar Aprendiz"
    mdlTitulo.appendChild(h1Id);

   

    modalEditar.querySelector("#nombrePaciente").value = usuario.name;
    modalEditar.querySelector("#edadPaciente").value = usuario.age;
    modalEditar.querySelector("#generoPaciente").value = usuario.gender ?? "M";
    modalEditar.querySelector("#diagnosticoPaciente").value = usuario.diagnosis;



    modalEditar.querySelector("#cfrEditarPaciente").addEventListener('click', () => {
        Swal.fire({
            title: "Esta seguro que desea actualizar el id? "+id,
            text: "Ten cuidado!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#080808ff",
            cancelButtonColor: "#5a5252ff",
            confirmButtonText: "Actualizar!"
        }).then((result) => {
            if (result.isConfirmed) {
                actualizarUsuario(usuario);
            }
        });
    })

}   


async function actualizarUsuario(usuario){
    
    
    const modalEditar = document.getElementById("mdlEditarPaciente");
    let datosUsuario={
        
        name:modalEditar.querySelector("#nombrePaciente").value,
        age:modalEditar.querySelector("#edadPaciente").value,
        gender:modalEditar.querySelector("#generoPaciente").value ,
        diagnosis:modalEditar.querySelector("#diagnosticoPaciente").value,


    }

const response = await fetch(url+"update.php?id="+usuario.id,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(datosUsuario)
    })

    const data = await response.json();
    
    mdlEditarAprendiz.hide();
    if(data.success){
        Swal.fire({
                    title: "Actualizado con exito!",
                    text: "El usuario fue actualizado con exito",
                    icon: "success"
            });

            location.reload();
    }





             
}


async function eliminarPaciente(id){

       
  const result = await Swal.fire({
    title: "¿Está seguro que desea eliminar el id: " + id + "?",
    text: "Ten cuidado!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#080808ff",
    cancelButtonColor: "#5a5252ff",
    confirmButtonText: "Eliminar!"
  });

  if (result.isConfirmed) {
    try {
      const response = await fetch(url + "delete.php?id=" + id, {
        method: "GET",
         headers: {
                "Content-Type": "application/json"
            } 
      });

      const data = await response.json();
      
      Swal.fire("Eliminado", "El paciente ha sido eliminado.", "success");

      
      const nuevosDatos = await obtenerDatos(url);
      llenartabla(nuevosDatos);

    } catch (error) {
      console.error("Error eliminando:", error);
      Swal.fire("Error", "No se pudo eliminar el paciente.", "error");
    }
  }


}