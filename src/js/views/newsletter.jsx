import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext";

export const Newsletter = () => {
    // Lo que hace el hook useContext es traernos a nuestro componente el 'contexto' global de la app. Esto es, un conjunto de variables y acciones globales 
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState('');
    console.log(store);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        actions.addNewsletterEmail(email);
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div className='join-horizontal'>
                <label htmlFor='email'>Email</label>
                <input className="input input-bordered w-full max-w-xs" id='email' name='email' placeholder='patata@gmail.com' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            </div>
            <input className='btn btn-primary btn-sm' type='submit'></input>
        </form>
    </div>
}