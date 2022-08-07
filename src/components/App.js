import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './LoginPage/Login';
import Cadastro from './LoginPage/Cadastro';
import UserContext from "../contexts/UserContext";
import { useState } from "react";



function App() {

    const [user, setUser] = useState({});
    console.log(user);

    return (
        <>
            < UserContext.Provider value={{user, setUser}}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/cadastro' element={<Cadastro />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );


}

export default App;