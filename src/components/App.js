import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './LoginPage/Login';
import Cadastro from './LoginPage/Cadastro';


function App(){


    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                </Routes>
            </BrowserRouter>
        </>
    );


}

export default App;