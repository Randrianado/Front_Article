import '../bootstrap.min.css';
import '../css/home.css';
import '../css/form.css';
import {useState,useContext} from 'react';
import {CartContext} from './../components/CartContext';
import {NavLink} from 'react-router-dom';
import { DeleteForeverRounded,Login } from '@mui/icons-material';
// import QRCode from 'qrcode.react';

export function Addfavorite(){
    const [number,setnumber]=useState('')
    const[search,setsearch]=useState('');
    const { cart,removeToCart } = useContext(CartContext);
    let i=1;
    const click=()=>{
        removeToCart();
    }   

    return (
        <>
                <header>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3">
                        <h5 className="my-0 mr-md-auto font-weight-normal j">E-Articles</h5>
                        <div className="w-100 mere">
                                <NavLink to={'/'} className='p-4 a'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 clas">
                                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                                    </svg>
                                </NavLink>
                                <NavLink to={'/Login'} className='p-4 a'>
                                   <Login/>
                                </NavLink>
                                <NavLink to={'/Sign'} className='p-4 a'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 clas">
                                        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2.046 15.253c-.058.468.172.92.57 1.175A9.953 9.953 0 0 0 8 18c1.982 0 3.83-.578 5.384-1.573.398-.254.628-.707.57-1.175a6.001 6.001 0 0 0-11.908 0ZM12.75 7.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z" />
                                    </svg>
                                </NavLink>
                                <NavLink to={'/Contact'} className='p-4 a'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 clas">
                                        <path d="M3.505 2.365A41.369 41.369 0 0 1 9 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 0 0-.577-.069 43.141 43.141 0 0 0-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 0 1 5 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914Z" />
                                        <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 0 0 1.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0 0 14 6Z" />
                                    </svg>
                                </NavLink>

                        </div>
                    <form className="form-inline mt-2 mt-md-0 w-100 te">
                        <input type='search' className=' container form form-control' placeholder='rechercher...' value={search} onChange={(e)=>setsearch(e.target.value)}/>
                    </form>
                </div>
            </header>
                <body>
                <table class="table table-striped table-sm container p5">
                    <thead>
                        <tr>
                            <th className='te'>#id</th>
                            <th className='te'>Nom</th>
                            <th className='te'>Prix</th>
                            <th className='te'>Nombres</th>
                            <th className='te'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                                {cart.length=== 0?<p className='text-danger text-center font-weight'>Aucun element dans votre panier</p>:
                                    cart.map((item) => (
                                        <tr>
                                            <td>{i++}</td>
                                            <td className='text-primary font-weight'>{item.name}</td>
                                            <td className='text-primary font-weight'>{item.price}</td>
                                            <td>
                                                <input type='number' value={(number<1)? 1 : number}  onChange={(e)=>setnumber(e.target.value)} className='jer'/>
                                            </td>
                                            <td className='text-danger'>
                                                <button type="Button" className='btn btn-danger'  onClick={click}>
                                                    <DeleteForeverRounded/>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                    </tbody>
                </table>
                </body>
    </>
    )
}