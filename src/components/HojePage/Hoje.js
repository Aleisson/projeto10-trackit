import styled from "styled-components";
import Menu from "../HabitPage/Menu"
import NavBar from "../HabitPage/NavBar";
import ContentHoje from "./ContentHoje";


function Hoje(){

    return(
        <HojePage>
           <NavBar />
           <ContentHoje />
           <Menu />     
        </HojePage>
    );

}

export default Hoje;

const HojePage = styled.div`
    background-color: #F2F2F2;
    height:1000px;
    width:100%;
    margin-bottom:100px;
`