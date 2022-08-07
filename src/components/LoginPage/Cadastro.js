import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { useState } from "react";
import { useNavigate } from "react-router";

import { LoginPage, LoginForm } from "./style";
import icon from "../../img/iconTrackIt.png";
import {postCad} from "../../services/tracklit"

function Cadastro() {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [form, setForm] = useState({});

    function handleForm({ value, name }) {

        setForm({
            ...form,
            [name]: value,
        });

        // console.log(form);


    }


    function cadastroPost(event) {
        event.preventDefault();
        setLoading(true);
        const promise = postCad({email: form.email, name: form.name, image: form.image?form.image:"https://cdn-icons-png.flaticon.com/512/149/149071.png", password: form.password});

        promise.then(() => navigate("/"));

        promise.catch(() => {
            alert("Usuario já cadastrado")
            setLoading(false);
        });


    }

    return (
        <CadastroPage>
            <img src={icon} alt="ICON" />
            <CadastroForm onSubmit={cadastroPost}>
                <input type='email' placeholder='email' name="email" onChange={(e) => handleForm({
                    name: e.target.name,
                    value: e.target.value,
                })} required disabled={loading}/>
                <input type='password' placeholder='senha' name="password" onChange={(e) => handleForm({
                    name: e.target.name,
                    value: e.target.value,
                })} required disabled={loading}/>
                <input type='text' placeholder='nome' name="name" onChange={(e) => handleForm({
                    name: e.target.name,
                    value: e.target.value,
                })} required disabled={loading}/>
                <input type='url' placeholder='foto (opcional)' name="image" onChange={(e) => handleForm({
                    name: e.target.name,
                    value: e.target.value,
                })} disabled={loading}/>
                <button type="submit">{loading ? Dots : "Cadastrar"}</button>
            </CadastroForm>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </CadastroPage>
    )

}

export default Cadastro;

const CadastroPage = styled(LoginPage)`
    height: 580px;
`;

const CadastroForm = styled(LoginForm)`
    height: 300px;
`;

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