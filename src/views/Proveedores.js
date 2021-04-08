import axios from 'axios'
import React, {useState} from 'react'
import Table from '../components/Table'
export default function Proveedores() {
const api = "http://localhost:3050/provedores";
const [datos, setdatos] = useState([])
const submit = e =>{
    e.preventDefault()
    axios.post(api, {datos})
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })
}


    return (
        <div className="card">
            <div className="card-body">

                <h2 className="text-center">Lista de Proveedores</h2>

                <i className="fas fa-plus" />
                <div className="text-end">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#AgregarModal">Agregar </button>

                </div>
                <Table></Table>
            </div>


            <div class="modal fade" id="AgregarModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Agregar provedor</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={submit}>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                                    <input onChange={e => setdatos({ ...datos,nombre: e.target.value})} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                  
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Razón Social</label>
                                    <input onChange={e => setdatos({ ...datos,razonSocial: e.target.value})} type="text" class="form-control" id="exampleInputPassword1" required />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Dirección</label>
                                    <input onChange={e => setdatos({ ...datos,direccion: e.target.value})} type="text" class="form-control" id="exampleInputPassword1" required />
                                </div>
                                <div className="d-flex justify-content-between">
                                <button type="button" class="btn btn-secondary " data-bs-dismiss="modal">Cerrar</button>
                                
                                <button type="submit" class="btn btn-primary text-end" >Guardar cambios</button>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
