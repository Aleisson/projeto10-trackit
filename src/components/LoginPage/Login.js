import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import icon from "../../img/iconTrackIt.png";
import { LoginPage, LoginForm } from "./style";
import {postLogin} from "../../services/tracklit"
import UserContext from "../../contexts/UserContext";



function Login() {

    const [loading, setLoading] = useState(false);
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({});

    function handleForm({ value, name }) {


        setForm({
            ...form,
            [name]: value,
        });


    }

    function accessLogin(event) {
        event.preventDefault();
        setLoading(true);
        const promise = postLogin({email:form.email, password:form.password });

       

        promise.then( (res) => {
            
            setUser(res.data);
            navigate("/habitos")

        });

        promise.catch(() => {
            alert("Usuario ou Senha não cadastrada");
            setLoading(false);
        })

       
      
        // setLoading(true);
        // console.log("email " + form.email);
        // console.log("Password " + form.password);
    }

    return (
        <LoginPage>
            <img src={icon} alt="ICON" />
            <LoginForm onSubmit={accessLogin}>
                <input type='email' placeholder='email' name="email" onChange={(e) => handleForm({
                    name: e.target.name,
                    value: e.target.value,
                })} required disabled={loading} />
                <input type='password' placeholder='senha' name="password" onChange={(e) => handleForm({
                    name: e.target.name,
                    value: e.target.value,
                })} required disabled={loading} />
                <button type="submit">{loading ? Dots : "Entrar"}</button>
            </LoginForm>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>

        </LoginPage>
    )

}

export default Login;

const Dots = <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#ffffff"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
/>

