<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard CRUD</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Modales -->
 <?php include 'componentes/mdlAprendiz.php' ?>
  <?php include 'componentes/mdlEditarPaciente.php' ?>

<div class="container-fluid">
    <div class="row flex-nowrap">
        <nav class="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse" id="sidebarMenu">
            <div class="position-sticky pt-3">
                <h4 class="text-white ps-3">Administrador de aprendices</h4>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Usuarios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Órdenes</a>
                    </li>
                </ul>
            </div>
        </nav>

        <main class="col px-4 py-4">
            <button class="btn btn-dark d-md-none mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu">
                ☰ Menú
            </button>
            <div class="table-header d-flex justify-content-between align-items-center mb-2">
                <h2 class="m-0">Aprendices</h2>
                <button id="btnAgregar" class="btn btn-dark">Agregar Paciente</button>
            </div>
            
            <div class="table-responsive">
                <table class="display" id="tblAprendices" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Diagnosis</th>
                            <th>Created At</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody id="datosAprendices">
                       
                    </tbody>
                </table>
            </div>
        </main>
    </div>
</div>



<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="./index.js"></script>


</body>
</html>
