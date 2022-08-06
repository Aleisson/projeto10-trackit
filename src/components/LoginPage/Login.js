import icon from "../../img/iconTrackIt.png";
import {LoginPage, LoginForm} from "./style";
import { Link } from 'react-router-dom';
import { ThreeDots  } from  'react-loader-spinner';

function Login() {

    function accessLogin(event){    
        event.preventDefault();
    }

    return (
        <LoginPage>
            <img src={icon} alt="ICON" />
            <LoginForm onSubmit={accessLogin}>
                <input type='email' placeholder='email' required/>
                <input type='password' placeholder='senha' required/>
                <button type="submit">Entrar</button>
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

