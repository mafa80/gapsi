import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Table() {
    const api = "http://localhost:3050/provedores";
    const [prov, setProv] = useState([]);
    useEffect(() => {
        axios.get(api)
            .then(function (response) {
                // handle success
                setProv(response.data.vendors)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    console.log(prov);



    
const delUser = async (item)=>{
    let apidell = api.concat('/',item.nombre)
    console.log(apidell);
    axios.delete(apidell, {data: 'payload'}).then( console.log('todo bien'))
}
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Razón Social</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {prov.map(item =>
                        <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.nombre}</td>
                            <td>{item.razonSocial}</td>
                            <td>{item.direccion}</td>
                            <td><button onClick={()=>{delUser(item)}} className="btn btn-danger">Eliminar</button></td>
                        </tr>
                    )}
                </tbody>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </table>
        </div>
    )
}
