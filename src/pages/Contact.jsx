import '../bootstrap.min.css';
import { useState } from "react";
import '../css/form.css';
import {NavLink } from 'react-router-dom';


export function Contact(){
    var [nom,setNom]=useState('');
    var [email,setEmail]=useState('');
    const [error,setError]=useState('');
    const [success,setSuccess]=useState('');
    // const navigate=useNavigate();

    const Click=(message)=>{
        setSuccess(message);
        setTimeout(() => {
                setSuccess('');
            }, 3000);
    }
    const Error=(message)=>{
            setError(message);
            setTimeout(() => {
                setError('');
            }, 3000);
    }
    function CheckInput(e){
        e.preventDefault();
        if(email==="" || nom==="" ){
                Error('veillez inserer les donneés')
        }else{
            Click('les commentaires sont bien envoyés');
        }
    }
    return(
        <>
            <header>
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 w-100 text-center">
                            <h5 className="my-0 mr-md-auto font-weight-normal j">E-Articles</h5>
                            <div className="w-100 mere">
                                    <NavLink to={'/'} className='p-4 a'>Acceuil</NavLink>
                                    <NavLink to={'/Favorite'} className='p-4 a'>Favoris</NavLink>
                                    <NavLink to={'/Login'} className='p-4 a'>Connexion</NavLink>
                                    <NavLink to={'/Sign'} className='p-4 a'>Inscription</NavLink>
                            </div>
                    </div>
            </header>
            <div className="container">
                    {error && <div className=" container text-center alert alert-danger w-50">{error}</div>}
                    {success && <div className=" container text-center alert alert-success w-50">{success}</div>}
                    <form className="form-group form1" onSubmit={CheckInput}> 
                            <h1>Contactez-nous!</h1>
                            <label className="lab">Nom:*</label>
                            <input  className='form form-control' type="text" value={nom} onChange={(e)=>setNom(e.target.value)}/>
                            <label className="lab">Email:*</label>
                            <input  className='form form-control' type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <label className="lab">Commentaire:*</label>
                            <textarea></textarea>
                            <button className="btn btn-success my-3">Contacter</button>
                    </form>
            </div>
        </>
    )
}