import styled from "styled-components";
import Menu from "./Menu"
import NavBar from "./NavBar";
import ContentHabito from "./ContentHabito";



function Habitos() {

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
