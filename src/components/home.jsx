import '../bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import { Login} from '@mui/icons-material';
import {useState,useContext} from 'react';
import { CartContext } from './CartContext';
import '../css/prem.css';

export  function Home(){
    const { addToCart } = useContext(CartContext);
    function Liste({search,check}){
        const produits=[
            {categories:"Sport",price:"$250",name:"Football",stocked:true,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum temporibus, adipisci enim tempore nostrum maxime dolor maiores ipsam eaque a voluptate ea hic, accusamus necessitatibus assumenda in quidem animi eligendi."},
            {categories:"Sport",price:"$270",name:"Baseball",stocked:false,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum temporibus, adipisci enim tempore nostrum maxime dolor maiores ipsam eaque a voluptate ea hic, accusamus necessitatibus assumenda in quidem animi eligendi."},
            {categories:"Sport",price:"$50",name:"Basketball",stocked:true,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum temporibus, adipisci enim tempore nostrum maxime dolor maiores ipsam eaque a voluptate ea hic, accusamus necessitatibus assumenda in quidem animi eligendi."},
            {categories:"Sport",price:"$250",name:"Iphone",stocked:false,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum temporibus, adipisci enim tempore nostrum maxime dolor maiores ipsam eaque a voluptate ea hic, accusamus necessitatibus assumenda in quidem animi eligendi."},
            {categories:"Sport",price:"$270",name:"Ecran",stocked:false,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum temporibus, adipisci enim tempore nostrum maxime dolor maiores ipsam eaque a voluptate ea hic, accusamus necessitatibus assumenda in quidem animi eligendi."},
            {categories:"Sport",price:"$50",name:"Ordinateur",stocked:true,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum temporibus, adipisci enim tempore nostrum maxime dolor maiores ipsam eaque a voluptate ea hic, accusamus necessitatibus assumenda in quidem animi eligendi."}
    ];
    const tab=[];
    produits.forEach(produit=>{
        if(check && !produit.stocked){
            return
        }
        if(produit.name.indexOf(search)===-1){
            return (<div className='text-center'>
            <p className='text-danger'>Aucun Resultat pour ce recherche</p>
        </div>)
        }
        // function addFav(produit){
        //     return (produit.name);
        // }
        const parametre=produit.stocked?produit.name : <span className='text-danger'>{produit.name}</span>
        const price=produit.stocked? <p>Prix:{produit.price}</p>: <p className='text-danger font-weight-bold'>Cette article n'est plus disponible</p>
        const verif=produit.stocked?
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group btn">
                                            <button type="Button" class="btn btn-primary w-100 align-center" onClick={()=>click(produit)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-1 clas">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                : ''
        tab.push(
            <div class="album py-5 item">
                <div class="container">
                    <div class="row">
                        <div class="w-90">
                            <div class="card mb-4 box-shadow">
                                <div class="card-body text-center">
                                    <p class=" jj card-text">{parametre}</p>
                                    <p class="card-text">{produit.description}</p>
                                    <p class="card-text font-weight-bold">{price}</p>
                                    <p class="card-text">{verif}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    })
    return (<div className='vide'>{tab}</div>)
    }
    const [search,setsearch]=useState('');
    const [radio,setradio]=useState('');
    const [count,setCount]=useState(0);

    const click=(item)=>{
        setCount(count + 1);
        addToCart(item);
    }
    return (
    <>
            <header>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3">
                        <h5 className="my-0 mr-md-auto font-weight-normal j">E-Articles</h5>
                        <div className="d-flex ">
                                <NavLink to={'/Login'} className='p-4 a'>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 clas">
                                        <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2.046 15.253c-.058.468.172.92.57 1.175A9.953 9.953 0 0 0 8 18c1.982 0 3.83-.578 5.384-1.573.398-.254.628-.707.57-1.175a6.001 6.001 0 0 0-11.908 0ZM12.75 7.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z" />
                                    </svg> */}
                                    <Login classme="clas"/>
                                </NavLink>
                                <NavLink to={'/Sign'} className='p-4 a'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 clas">
                                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                    </svg>
                                </NavLink>
                                <NavLink to={'/Contact'} className='p-4 a'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 clas">
                                        <path d="M3.505 2.365A41.369 41.369 0 0 1 9 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 0 0-.577-.069 43.141 43.141 0 0 0-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 0 1 5 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914Z" />
                                        <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 0 0 1.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0 0 14 6Z" />
                                    </svg>
                                </NavLink>
                                <NavLink to={'/Favorite'} className='p-4 a'>
                                    <div style={{position:'relative'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-1 clas">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                            {count > 0  && (
                                                <span className='sp'>
                                                    {count}
                                                </span>
                                            )}
                                    </div>
                                </NavLink>
                                {/* <NavLink to={'/App'} className='p-4 a'>
                                    App
                                </NavLink> */}


                        </div>
                    <form className="form-inline mt-2 mt-md-0 w-100 te">
                        <input type='search' className=' container form form-control' placeholder='rechercher...' value={search} onChange={(e)=>setsearch(e.target.value)}/>
                    </form>
                </div>
            </header>
            <body>
                <section class="jumbotron text-center m-10">
                    <div class="container">
                        <h1 class="jumbotron-heading">Ventes des appareils</h1>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, fuga distinctio quos velit modi minima commodi, nobis nam ea tempore facere voluptatum quod porro, rerum perspiciatis ducimus esse excepturi natus.</p>
                        <p color='black'>
                            <input className='form-check-input' type={'checkbox'} value={radio} onChange={(e)=>setradio(e.target.checked)}/>
                            <label className=' container'>Voir les produits en stockes</label>
                        </p>
                    </div>
                </section>
                <div className='id'>
                        <Liste search={search} check={radio}/>
                </div>
                
            </body>
    </>      
    )
}