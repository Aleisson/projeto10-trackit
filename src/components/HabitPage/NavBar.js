import { NavBarPage } from "./style";

import { useContext } from "react";

import UserContext from "../../contexts/UserContext";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";

function NavBar() {

    const userTemp = {
        image: "http://s3.amazonaws.com/gt7sp-prod/decal/24/48/63/4620724079169634824_1.png", name: "testeCA2"
    }

    const { user } = useContext(UserContext);


    return (
        <NavBarPage>
            <p>TrackIt</p><img src={userTemp.image} alt="user" />
        </NavBarPage>
    )

}

export default NavBar;

