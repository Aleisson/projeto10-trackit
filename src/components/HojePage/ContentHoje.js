import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { getHabit, postHabit, deleteHabit, todayHabit } from "../../services/tracklit";
import UserContext from "../../contexts/UserContext";
import HojeContext from "../../contexts/HojeContext";

import { AddHabit, ParamHabit, ContentPage } from "../HabitPage/style";

function ContentHoje() {


    return (
        <ContentPage>
            <AddHabit>
                <h3>Hoje</h3>
            </AddHabit>
        </ContentPage>
    );

}

export default ContentHoje;