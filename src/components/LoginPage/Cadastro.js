import styled from "styled-components";
import icon from "../../img/iconTrackIt.png";
import {LoginPage, LoginForm} from "./style";
import { Link } from 'react-router-dom';
import { ThreeDots  } from  'react-loader-spinner';

function Cadastro() {

    return (
        <CadastroPage>
            <img src={icon} alt="ICON" />
            <CadastroForm>
                <input type='email' placeholder='email' />
                <input type='password' placeholder='senha' />
                <input type='text' placeholder='nome' />
                <input type='url' placeholder='foto' />
                <button>Cadastrar</button>
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