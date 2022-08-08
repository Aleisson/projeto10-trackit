import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContext from "../contexts/UserContext";
import HabitDayContext from "../contexts/UserContext";
import Login from './LoginPage/Login';
import Cadastro from './LoginPage/Cadastro';
import Habitos from "./HabitPage/Habitos";
import Hoje from "./HojePage/Hoje";
import Historico from "./HistoricoPage/Historico";




function App() {

    const [user, setUser] = useState({});
    const [habit, setHabit] = useState([]);
    const [habitDay, setHabitDay] = useState([]);

    console.log(user);

    return (
        <>

            <HabitDayContext.Provider value={{ habitDay, setHabitDay, habit, setHabit }}>
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
            </HabitDayContext.Provider>

        </>
    );


}

export default App;