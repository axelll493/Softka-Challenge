import React from 'react'
import Register from './Register'
import Login from './Login'
import '../css/lobby.css'
export default function Lobby() {
    return (<>
   
        <h2 className='title d-flex justify-content-center mt-3'>Enter play and win, developer</h2>
        
        <div class="container">
            <div class="row">
                <div class="col">
                    <Register />
                </div>
                <div class="col">
                    <Login />
                </div>
            </div>
        </div>
    </>)
}
