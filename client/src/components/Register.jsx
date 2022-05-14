import React from 'react'
import { useDispatch } from 'react-redux';
import { registroEmailPasswordNombre } from '../actions/actionRegister';
import { useForm } from '../hooks/useForm';

export default function Register() {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: '',
        nombreCompleto: ''
    })

    const { email, password, nombreCompleto } = values;

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(nombreCompleto, email, password))
        reset();

    }


    return (<>
        <div className="Container mt-5 p-3">
            <form onSubmit={handleRegister}>
                <h4 className="d-flex justify-content-center mb-4">
                    Sign Up
                </h4>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Full name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        aria-describedby="emailHelp"
                        name="nombreCompleto"
                        value={nombreCompleto}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        value={password}
                        onChange={handleInputChange}

                    />
                </div>
                <div className="d-flex align-items-center flex-column">
                    <button type="submit" className='small blue button'>Register</button>
                </div>
            </form>
        </div>
    </>)
}
