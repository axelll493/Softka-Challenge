import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { mostrarGanadorAsincronico } from '../actions/actionGanador'
import { actualizaNumPreg } from '../actions/actualizaNumPreg'
import { mostrarGanadoresAsincronico } from '../actions/actionGanador'
import '../css/inicio.css'
import '../css/Buttons.css'

export default function Inicio() {

    const dispatch = useDispatch()
    const usuarioLogeado = useSelector(store => store.login)
    const correo = usuarioLogeado.correo
    const nombre = usuarioLogeado.displayName
    const acumu = useSelector(store => store.acumuladoVal)
    const acumulado = acumu.acumulado

    useEffect(() => {
        dispatch(mostrarGanadoresAsincronico())
        dispatch(actualizaNumPreg(0))
        dispatch(mostrarGanadorAsincronico(correo))
    }, [])


    return (<>
        <div className="Container ">
            {nombre !== undefined &&
                <h3 className="d-flex justify-content-center">
                    ¡HELLO {nombre.toUpperCase()}!
                </h3>
            }
            {acumulado === 0 ?
                <h4 className="d-flex justify-content-center">
                    Welcome developer, to the place where you can earn money knowing how to program
                </h4>
                : acumulado === 100000000 ?
                    <h4 className="d-flex justify-content-center">
                        
                      You have answered all the questions
                    </h4>
                    :
                    <h4 className="d-flex justify-content-center">
                        {`You already have  ${acumulado} USD accumulated, you cannot play again`}
                    </h4>

            }
            <hr />
            <h4 className="d-flex justify-content-center">
                 RULES
            </h4>
            <hr />
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-center" style={{color:"black"}}><strong>
                    The player will start with no accumulated money
                </strong>
                    
                </li>
                <li className="list-group-item d-flex justify-content-center" style={{color:"black", textAlign:"center"}}>
                    <strong>
                         The Player when advancing will have the option to withdraw and keep the money earned up to that moment
                    </strong>
                   
                </li>
                <li className="list-group-item d-flex justify-content-center" style={{color:"black", textAlign:"center"}}>
                    <strong>
                    You can play as many times as you want if you have not accumulated money 
                    </strong>
                    
                </li>
                <li className="list-group-item d-flex justify-content-center" style={{color:"black", textAlign:"center"}}>
                    <strong>
                    If the answer is wrong you will lose everything 
                    </strong>
                    
                </li>
                <ul className="list-group-item">
                    <br />
                    <h6 lassName="list-group-item d-flex justify-content-center" style={{color:"black", textAlign:"center"}}>
                        <strong>
                        Accumulated money:
                        </strong>
                       
                    </h6>
                    <li className="list-group-item d-flex justify-content-center" style={{color:"black", textAlign:"center"}}>
                    <strong>
                     Question 1: $250.000
                    </strong>
                        
                    </li>
                    <li className="list-group-item d-flex justify-content-center" style={{color:"black", textAlign:"center"}}>
                    <strong>
                        Question 2: $500.000
                    </strong>
                        
                    </li>
                    <li className="list-group-item d-flex justify-content-center" style={{color:"black", textAlign:"center"}}>
                    <strong>
                    Question 3: $1.000.000
                    </strong>
                        
                    </li>
                    <li className="list-group-item d-flex justify-content-center" style={{color:"black", textAlign:"center"}}>
                    <strong>
                    Question 4: $10.000.000
                    </strong>
                        
                    </li>
                    <li className="list-group-item d-flex justify-content-center" style={{color:"black", textAlign:"center"}}>
                    <strong>
                    Question 5: $100.000.000
                    </strong>
                        
                    </li>
                </ul>
            </ul>
            <hr />
                 
                <h4 className="d-flex justify-content-center">
                <Link to='/pregunta1' style={{ textDecoration: 'none' }}><button class="rainbow-button">PLAY</button></Link>
                </h4>
           
            <br />
            <div className="d-flex justify-content-center">

                <Link to="/ganadores" style={{ textDecoration: 'none' }}><button className='small blue button'>winners table</button></Link>
                
            </div>
            <br />
            <hr />
        </div>
    </>)
}

