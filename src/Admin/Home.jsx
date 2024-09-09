import '../bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import {useState,useEffect} from 'react';
import { AddCircle,DeleteForeverRounded,LogoutRounded,Edit } from '@mui/icons-material';
import '../css/prem.css';

function Liste({search}){
    const produits=[
        {categories:"Sport",price:"$250",name:"Football",stocked:true,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum temporibus, adipisci enim tempore nostrum maxime dolor maiores ipsam eaque a voluptate ea hic, accusamus necessitatibus assumenda in quidem animi eligendi."},
        {categories:"Sport",price:"$270",name:"Baseball",stocked:false,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum temporibus, adipisci enim tempore nostrum maxime dolor maiores ipsam eaque a voluptate ea hic, accusamus necessitatibus assumenda in quidem animi eligendi."},
        {categories:"Sport",price:"$50",name:"Basketball",stocked:true,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum temporibus, adipisci enim tempore nostrum maxime dolor maiores ipsam eaque a voluptate ea hic, accusamus necessitatibus assumenda in quidem animi eligendi."},
        {categories:"Electronique",price:"$250",name:"Iphone",stocked:false,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum temporibus, adipisci enim tempore nostrum maxime dolor maiores ipsam eaque a voluptate ea hic, accusamus necessitatibus assumenda in quidem animi eligendi."},
        {categories:"Electronique",price:"$270",name:"Ecran",stocked:false,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum temporibus, adipisci enim tempore nostrum maxime dolor maiores ipsam eaque a voluptate ea hic, accusamus necessitatibus assumenda in quidem animi eligendi."},
        {categories:"Non",price:"$50",name:"Ordinateur",stocked:true,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum temporibus, adipisci enim tempore nostrum maxime dolor maiores ipsam eaque a voluptate ea hic, accusamus necessitatibus assumenda in quidem animi eligendi."}
    ];
    const tab=[];
    let i=1;
    produits.forEach(produit=>{
        if(produit.name.indexOf(search)===-1){
            return (<div className='text-center'>
            <p className='text-danger'>Aucun Resultat pour ce recherche</p>
        </div>)
        }
        const name=produit.stocked? produit.name : <p className='text-danger'>{produit.name}</p>;
        tab.push(
            <tr>
                <td>{i++}</td>
                <td className='text-primary font-weight'>{name}</td>
                <td className='text-warning'>
                    <NavLink to={'/Edit'}>
                        <Edit/>
                    </NavLink>
                </td>
                <td className='text-danger'>
                    <DeleteForeverRounded/>
                </td>
            </tr>
        )
    })
    return (
        <table class="table table-striped table-sm container p5">
                    <thead>
                        <tr>
                            <th className='te'>#id</th>
                            <th className='te'>Nom</th>
                            <th className='te'>Modifcation</th>
                            <th className='te'>Supression</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tab}
                    </tbody>
                </table>
    )
}

export function Princip(){
    const [search,setsearch]=useState('');
    const [user,setUser]=useState([]);
    useEffect(()=>{
        async function fetchUser(){
            try {
                const response=await fetch('http://localhost:8000/home',{
                    method:'GET',
                    headers:{
                        'Content-Type':'application/json',
                        'Accept':'application/json',
                    },
                });
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                const data= await response.json();
                setUser(data);
            } catch (error) {
                console.error('Erreur lors de la recuperation');
            }
        }
        fetchUser();
    },[])
    return(
        <>
            <header>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3">
                        <h5 className="my-0 mr-md-auto font-weight-normal j">E-Articles</h5>
                        <div className="w-100 mere">
                                <NavLink to={'/Add'} className='p-4 a'>
                                    <AddCircle/>
                                </NavLink>
                                <NavLink to={'/Favorite'} className='p-4 a'>
                                        <LogoutRounded/>
                                </NavLink>

                        </div>
                    <form className="form-inline mt-2 mt-md-0 w-100 te">
                        <input type='search' className=' container form form-control' placeholder='rechercher...' value={search} onChange={(e)=>setsearch(e.target.value)}/>
                    </form>
                </div>
            </header>
            <body>
                <Liste search={search}/>
            </body>
            <div>
                <h1>User</h1>
                <ul>
                    {user.map((users) => (
                    <h1 key={users.id}>{users.name}</h1>
                    ))}
                </ul>
            </div>
        </>
    )
}