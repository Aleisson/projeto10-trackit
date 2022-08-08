import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";


import Menu from "./Menu"
import NavBar from "./NavBar";
import ContentHabito from "./ContentHabito";



function Habitos() {

    
    const { user } = useContext(UserContext);






    return (
        <HabitosPage>
            <NavBar />
            <ContentHabito />
            <Menu />
        </HabitosPage>
    );
}

export default Habitos;

const HabitosPage = styled.div`
    background-color: #F2F2F2;
    height:1000px;
    width:100%;
    margin-bottom:100px;
`
