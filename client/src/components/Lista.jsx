import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actualizaNumPreg } from '../actions/actualizaNumPreg'

export default function Lista() {

    const dispatch = useDispatch()
    const ganadores = useSelector(store => store.ganadores.ganadores)
    const orden = ganadores.sort(((a, b) => b.acumulado - a.acumulado))
    console.log(orden)
    useEffect(() => {
        dispatch(actualizaNumPreg(6))
    }, [dispatch])

    return (<>

        <table className="Container table">
            <thead>
                <tr>
                <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Dollars won, during a round</th>
                </tr>
            </thead>
            <tbody>
                {
                orden.map((ganador,index) =>
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{ganador.nombre}</td>
                        <td>{ganador.correo}</td>
                        <td>{`$${ganador.acumulado} USD`}</td>
                    </tr>
                )}
            </tbody>
        </table>

    </>)
}
