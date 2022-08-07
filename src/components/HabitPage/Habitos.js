import { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";


import Menu from "./Menu"
import NavBar from "./NavBar";



function Habitos() {

    const userTemp = {
        image: "http://s3.amazonaws.com/gt7sp-prod/decal/24/48/63/4620724079169634824_1.png", name: "testeCA2"
    }
    const { user } = useContext(UserContext);




    function postHeader(event) {
        event.preventDefault();

    }

    return (
        <>
            <NavBar />
            <Menu />
        </>
    );
}

export default Habitos;

