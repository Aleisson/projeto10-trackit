import styled from 'styled-components';
import icon from "../../img/iconTrackIt.png";
import {LoginPage, LoginForm} from "./style";

function Login() {

    return (
        <LoginPage>
            <img src={icon} alt="ICON" />
            <LoginForm>
                <input type='email' placeholder='email' />
                <input type='password' placeholder='senha' />
                <button>Entrar</button>
            </LoginForm>
        </LoginPage>
    )

}

export default Login;



