import React, { useEffect } from 'react'
import Swal from 'sweetalert2';
import data from '../data.json';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { actualizaNumPreg } from '../actions/actualizaNumPreg';
import { actualizaAcumu } from '../actions/actualizaAcumulado';
import '../css/Level.css'
export default function NivelUno() {

    const history = useHistory();
    const dispatch = useDispatch();

    const nivel1 = data.nivel1;
    const preg = parseInt(Math.random() * (6 - 1) + 1);

    const pregunta = nivel1.find(pregunta => pregunta.id === preg);

    const handleRespuesta = (e) => {
        const respSelect = e.target.value;

        Swal.fire({
            title: `Are you sure the correct answer is, "${respSelect}"`,
            showCancelButton: false,
            showDenyButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed & respSelect.toLowerCase() === pregunta.correcta.toLowerCase()) {
                Swal.fire('¡correct!', '', 'success')
                dispatch(actualizaAcumu(250000))
                history.replace('/pregunta2')
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
            confirmButtonText: 'Si',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('You had nothing to lose,', 'info')
                history.replace('/')
            } else if (result.isDenied) {
                Swal.fire('don t give up you can win', '', 'success')
            }
        })
    }


    useEffect(() => {
        dispatch(actualizaNumPreg(1))
    }, [dispatch])

    return (<>
        <div className="Container m5">

            <h3 className="d-flex justify-content-center">
                {`First ${pregunta.categories} question`}
            </h3>
            <h3 className="d-flex justify-content-center">
                for a total of
            </h3>
            <h5 className="d-flex justify-content-center">
                 $250.000 USD
            </h5>
            <br />
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
                    <label class="form-check-label" for="flexRadioDefault1">{pregunta.respuesta1}</label>
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
