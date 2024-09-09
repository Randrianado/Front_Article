import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { LoginForm } from "./components/login";
import { Home } from "./components/home";
import {Sign} from "./components/sign";
import { Contact } from "./pages/Contact";
import { Addfavorite } from "./pages/favorite";
import { Princip } from "./Admin/Home";
import { Add } from "./Admin/add";
import {Edit} from "./Admin/update";    


function App(){
    return (
        <>
            <BrowserRouter>
                    <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/Login" element={<LoginForm/>}/>
                            <Route path="/Sign" element={<Sign/>}/>
                            <Route path="/Contact" element={<Contact/>}/>
                            <Route path="/Favorite" element={<Addfavorite/>}/>
                            <Route path="/Dash" element={<Princip/>}/>
                            <Route path="/Add" element={<Add/>}/>
                            <Route path="/Edit" element={<Edit/>}/>
                    </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;