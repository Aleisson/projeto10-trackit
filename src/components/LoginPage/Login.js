import icon from "../../img/iconTrackIt.png";
import {LoginPage, LoginForm} from "./style";
import { Link } from 'react-router-dom';

function Login() {

    return (
        <LoginPage>
            <img src={icon} alt="ICON" />
            <LoginForm>
                <input type='email' placeholder='email' />
                <input type='password' placeholder='senha' />
                <button>Entrar</button>
            </LoginForm>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginPage>
    )

}

export default Login;



