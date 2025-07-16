<div class="modal" tabindex="-1" id="mdlEditarPaciente">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Editar Paciente</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">



                

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombrePaciente" aria-describedby="emailHelp" required>
                </div>


                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Edad</label>
                    <input type="text" class="form-control" id="edadPaciente" aria-describedby="emailHelp" required>
                </div>


                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Genero</label>
                    <select name="" id="generoPaciente" class="form-select">
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Diagnostico</label>
                    <input type="text" class="form-control" id="diagnosticoPaciente" aria-describedby="emailHelp" required>
                </div>






            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrrar</button>
                <button type="button" id="cfrEditarPaciente" class="btn btn-dark">Actualizar Paciente</button>
            </div>
        </div>
    </div>
</div>