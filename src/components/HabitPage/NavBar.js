import { NavBarPage } from "./style";

import { useContext } from "react";

import UserContext from "../../contexts/UserContext";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";

function NavBar() {
    const { user } = useContext(UserContext);


    return (
        <NavBarPage>
            <p>TrackIt</p><img src={user.image} alt="user" />
        </NavBarPage>
    )

}

export default NavBar;

