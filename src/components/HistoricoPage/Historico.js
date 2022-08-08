import styled from "styled-components";
import Menu from "../HabitPage/Menu"
import NavBar from "../HabitPage/NavBar";
import ContentHistorico from "./ContentHistorico";

function Historico(){

    return(
        <HistoricoPage>
            <NavBar />
            <ContentHistorico />
             <Menu />
        </HistoricoPage>
    );

}

export default Historico;

const HistoricoPage = styled.div`
    background-color: #F2F2F2;
    height:1000px;
    width:100%;
    margin-bottom:100px;
`
