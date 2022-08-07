import styled from "styled-components";
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import {MenuPage, DivContagem} from "./style"

function Menu() {

    return (
        <MenuPage>
            <Link to="/habitos" style={{ textDecoration: "none" }}>
                <p>Hábitos</p>
            </Link>
            <Link to="/hoje">
            <DivContagem>
                <CircularProgressbar
                    value={77}
                    text={`Hoje`}
                    background
                    backgroundPadding={5}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                        
                    })}
                />
            </DivContagem>
            </Link>
            <Link to="/historico" style={{ textDecoration: "none" }}>
                <p>Histórico</p>
            </Link>
        </MenuPage>
    );

}

export default Menu;

