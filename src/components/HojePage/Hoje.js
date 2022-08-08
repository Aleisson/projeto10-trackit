import styled from "styled-components";
import Menu from "../HabitPage/Menu"
import NavBar from "../HabitPage/NavBar";


function Hoje(){

    return(
        <HojePage>
           <NavBar />
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