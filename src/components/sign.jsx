import { useState } from "react";
import '../bootstrap.min.css';
import '../css/style.css';
import { Login} from '@mui/icons-material';
import {useNavigate,NavLink} from 'react-router-dom';
import QRCode from 'qrcode.react';

export function Sign(){
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [nom,setNom]=useState('');
    const [passe,setPasse]=useState('');
    const [error,setError]=useState('');
    const [mdp,setMdp]=useState(false);

    const Click=()=>{
        console.log(nom,email,passe);
        return(
            navigate('/')
        )
    }
    const Error=(message)=>{
            setError(message);
            setTimeout(() => {
                setError('');
            }, 3000);
    }
    function CheckInput(e){
        e.preventDefault();
        if(email==="" || passe===""  || nom===""){
                Error('veillez inserer les donneés')
        }else{
            Click();
        }
    }
    const afficheMdp=()=>{
        setMdp(tr=>!tr);
    }
    return (
        <>
            <header>
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 w-100 text-center">
                            <h5 className="my-0 mr-md-auto font-weight-normal j">E-Articles</h5>
                            <div className="w-100 mere">
                                    <NavLink to={'/'} className='p-4 a'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 clas">
                                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                        </svg>
                                    </NavLink>
                                    <NavLink to={'/Favorite'} className='p-4 a'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-1 clas">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                    </NavLink>
                                    <NavLink to={'/Login'} className='p-4 a'>
                                       <Login/>
                                    </NavLink>
                                    <NavLink to={'/Contact'} className='p-4 a'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 clas">
                                            <path d="M3.505 2.365A41.369 41.369 0 0 1 9 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 0 0-.577-.069 43.141 43.141 0 0 0-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 0 1 5 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914Z" />
                                            <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 0 0 1.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0 0 14 6Z" />
                                        </svg>
                                    </NavLink>
                            </div>
                    </div>
            </header>
            {error && <div className=" container text-center alert alert-danger w-50">{error}</div>}
            <div className="container container1">
                <div className="gauche">
                        <p> votre Qr code </p>
                        <QRCode className="qr" value={` votre pseudos est ${nom} qui a pour email de ${email} et mdp de :${passe}`}/>
                </div>
                <div className="form-group">
                    <form className="form-group" onSubmit={CheckInput}> 
                                <h1>
                                    Inscrivez-Vous!
                                </h1>
                                <label className="text-dark">Entrer votre pseudos:*</label>
                                <input  className='form form-control' type="text" value={nom} onChange={(e)=>setNom(e.target.value)}/>
                                <label className="text-dark">Entrer votre email:*</label>
                                <input  className='form form-control' type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                <label className="text-dark">Entrer votre mot de passe:*</label>
                                <input  className='form form-control' type={mdp ? 'text' : 'password'} value={passe} onChange={(e)=>setPasse(e.target.value)}/> 
                                <button type="button" onClick={afficheMdp}  className="absolute inset-y-0 right-0 pr-3 flex items-center k">
                                        {mdp ?
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 clas">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 clas">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        }
                                </button>
                                <button className="btn btn-outline-secondary my-3">Inscription</button>
                    </form>
                </div>
            </div>
        </>
    )
}