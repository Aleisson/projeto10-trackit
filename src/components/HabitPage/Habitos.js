import { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";


import Menu from "./Menu"
import NavBar from "./NavBar";
import ContentHabit from "./ContentHabit";



function Habitos() {

    
    const { user } = useContext(UserContext);






    return (
        <HabitosPage>
            <NavBar />
            <ContentHabit />
            <Menu />
        </HabitosPage>
    );
}

export default Habitos;

const HabitosPage = styled.div`
    background-color: #F2F2F2;
    height:600px;
    width:100%
`
