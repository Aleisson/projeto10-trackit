import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContext from "../contexts/UserContext";
import HabitoContext from "../contexts/HabitoContext";
import HojeContext from "../contexts/HojeContext";
import Login from './LoginPage/Login';
import Cadastro from './LoginPage/Cadastro';
import Habitos from "./HabitPage/Habitos";
import Hoje from "./HojePage/Hoje";
import Historico from "./HistoricoPage/Historico";




function App() {

    const [user, setUser] = useState({});
    const [habitos, setHabitos] = useState([]);
    const [hoje, setHoje] = useState([]);

    console.log(user);

    return (
        <>
            <HojeContext.Provider value={{hoje,setHoje}}>
                <HabitoContext.Provider value={{ habitos, setHabitos }}>
                    < UserContext.Provider value={{ user, setUser }}>
                        <BrowserRouter>
                            <Routes>
                                <Route path='/' element={<Login />} />
                                <Route path='/cadastro' element={<Cadastro />} />
                                <Route path='/habitos' element={<Habitos />} />
                                <Route path='/hoje' element={<Hoje />} />
                                <Route path='/historico' element={<Historico />} />
                            </Routes>
                        </BrowserRouter>
                    </UserContext.Provider>
                </HabitoContext.Provider>
            </HojeContext.Provider>
        </>
    );


}

export default App;