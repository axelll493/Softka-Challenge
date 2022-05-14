import React, { useEffect } from 'react'
import Swal from 'sweetalert2';
import data from '../data.json';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { actualizaNumPreg } from '../actions/actualizaNumPreg';
import { actualizaAcumu } from '../actions/actualizaAcumulado';
import { enviarGanadores } from '../actions/actionGanador';

export default function NivelCinco() {

    const history = useHistory();
    const dispatch = useDispatch();

    const usuarioLogeado = useSelector(store => store.login)
    const correo = usuarioLogeado.correo
    const nombre = usuarioLogeado.displayName
    const acumu = useSelector(store => store.acumuladoVal)
    let acu = 0
    const acumulado = acumu.acumulado

    const nivel = data.nivel5;
    const preg = parseInt(Math.random() * (6 - 1) + 1);

    const pregunta = nivel.find(pregunta => pregunta.id === preg);

    const handleRespuesta = (e) => {
        const respSelect = e.target.value;
        Swal.fire({
            title: `Are you sure the correct answer is, "${respSelect}"`,
            showCancelButton: false,
            showDenyButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed & respSelect.toLowerCase() === pregunta.correcta.toLowerCase()) {
                Swal.fire('Correct! you ve won the game', 'success')
                dispatch(actualizaAcumu(100000000))
                acu = 100000000
                dispatch(enviarGanadores(acu, nombre, correo))
                history.replace('/')
            } else if (result.isConfirmed & respSelect.toLowerCase() !== pregunta.correcta.toLowerCase()) {
                Swal.fire('Incorrect! you have lost everything', '', 'error')
                dispatch(actualizaAcumu(0))
                history.replace('/')
            } else if (result.isDenied) {
                Swal.fire('You have the possibility to withdraw', '', 'info')
            }
        })
    }

    const handleRetirar = () => {
        Swal.fire({
            title: `Are you sure you want to withdraw? `,
            showCancelButton: false,
            showDenyButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed ) {
                Swal.fire(`You have accumulated $${acumulado} USD`, '', 'info')
                dispatch(enviarGanadores(acumulado, nombre, correo))
                history.replace('/')
            } else if (result.isDenied) {
                Swal.fire('don t give up you can win', '', 'success')
            }
        })
    }


    useEffect(() => {
        dispatch(actualizaNumPreg(5))
    }, [dispatch])

    return (<>
        <div className="Container mt-5">
        <h3 className="d-flex justify-content-center">
                {`Second ${pregunta.categories} question`}
            </h3>
            <h3 className="d-flex justify-content-center">
                for a total of
            </h3>
            <h5 className="d-flex justify-content-center ">
            $100.000.000 USD
            </h5>

            <hr />
            <h4 className="d-flex justify-content-center">
                {pregunta.pregunta}
            </h4>
            <hr />
            <div className="d-flex align-items-center flex-column">
                <div className="d-flex align-items-center">
                <div className="form-check">
                        <input
                            className="form-check-input" 
                            type="radio" 
                            nid="flexRadioDefault1"
                            value={pregunta.respuesta1}
                            onClick={handleRespuesta}
                            name='pregunta'
                            aria-label="Radio button for following text input" />
                    </div>
                    <span className="ms-1">{pregunta.respuesta1}</span>
                </div>
                <br />
                <div className="d-flex align-items-center">
                <div className="form-check">
                        <input
                            className="form-check-input" 
                            type="radio" 
                            nid="flexRadioDefault1"
                            value={pregunta.respuesta2}
                            onClick={handleRespuesta}
                            name='pregunta'
                            aria-label="Radio button for following text input" />
                    </div>
                    <span className="ms-1">{pregunta.respuesta2}</span>
                </div>
                <br />
                <div className="d-flex align-items-center">
                <div className="form-check">
                        <input
                            className="form-check-input" 
                            type="radio" 
                            nid="flexRadioDefault1"
                            value={pregunta.respuesta3}
                            onClick={handleRespuesta}
                            name='pregunta'
                            aria-label="Radio button for following text input" />
                    </div>
                    <span className="ms-1">{pregunta.respuesta3}</span>
                </div>
                <br />
                <div className="d-flex align-items-center">
                <div className="form-check">
                        <input
                            className="form-check-input" 
                            type="radio" 
                            nid="flexRadioDefault1"
                            value={pregunta.respuesta4}
                            onClick={handleRespuesta}
                            name='pregunta'
                            aria-label="Radio button for following text input" />
                    </div>
                    <span className="ms-1">{pregunta.respuesta4}</span>
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center flex-column">
            <button onClick={handleRetirar} style={{marginBottom:"20px"}} type="button" className='small red button'>
                        I want to retire
                    </button>
            </div>
        </div>

    </>)
}
