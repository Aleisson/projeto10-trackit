import styled from "styled-components";
import lixeira from "../../img/lixeira.png";
import { useContext, useEffect, useState } from "react";
import { getHabit, postHabit, deleteHabit } from "../../services/tracklit"
import UserContext from "../../contexts/UserContext";
import HabitDayContext from "../../contexts/UserContext";

function Habito({ name, days, id, atualizaHabitos }) {

    const {user} = useContext(UserContext);
    
    let array = [1, 2, 3, 4, 5, 6, 7];
    let daysIN = [<DayIN>D</DayIN>,
    <DayIN>S</DayIN>,
    <DayIN>T</DayIN>,
    <DayIN>Q</DayIN>,
    <DayIN>Q</DayIN>,
    <DayIN>S</DayIN>,
    <DayIN>S</DayIN>]
    let daysOUT = [<DayOut>D</DayOut>,
    <DayOut>S</DayOut>,
    <DayOut>T</DayOut>,
    <DayOut>Q</DayOut>,
    <DayOut>Q</DayOut>,
    <DayOut>S</DayOut>,
    <DayOut>S</DayOut>]

   


    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < days.length; j++) {
            if (array[i] === days[j]) {
                array[i] = "IN";
            }

        }

    }

    for (let i = 0; i < array.length; i++) {
        if(array[i] === "IN"){
            array[i]=daysIN[i];
        }else{
            array[i] = daysOUT[i];
        }
        
    }

    function apagarHabito(id){
        alert("ID: " + id);
        alert("Token: " + user.token);
        if(window.confirm("Tem certeza que deseja apagar esse habito")){
            deleteHabit(id,user.token);
            
            const promise = getHabit(user.token);

            promise.then(
                (res) => {
                    atualizaHabitos(res.data)
                }
            );
            
        }
    }

    return (
        <HabitoPage>
            <img onClick={() => apagarHabito(id)} src={lixeira} alt="lixeira"></img>
            <p>{id}</p>
            <DaysPage>
               {array}
            </DaysPage>
        </HabitoPage>
    );

}

const HabitoPage = styled.div`

    width: 100%;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 10px 10px;
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content: space-between;
    margin-top:10px;
    margin-bottom: 10px;

    img{
        position:absolute;
        right:30px
    }
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

`
const DaysPage = styled.div`

    display: flex;
    justify-content:space-between;
    width: 260px;
    height:auto;

`;

const DayIN = styled.div`
    width: 30px;    
    height: 30px;
    background-color:#CFCFCF;
    border: 1px solid #CFCFCF;
    border-radius: 3px;
    display: flex;
    justify-content:center;
    align-items:center;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #FFFFFF;

`;

const DayOut = styled.div`

    width: 30px;    
    height: 30px;
    background-color:#ffffff;
    border: 1px solid #CFCFCF;
    border-radius: 3px;
    display: flex;
    justify-content:center;
    align-items:center;


    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color:#CFCFCF;

`;


function ContentHabit() {

    const { user } = useContext(UserContext);
    const [habitos, setHabitos] = useState([]);

   
    useEffect(() => {

        const promise = getHabit(user.token);

        promise.then(
            (res) => {
                setHabitos(res.data)
            }
        );
        console.log(habitos)
    }, []);

 
    function atualizaHabitos(data){
        setHabitos(data);
    }
   
    return (
        <ContentPage>
            <AddHabit>
                <h3>Meus hábitos</h3>
                <button>+</button>
            </AddHabit>
            {habitos.length ? habitos.map((x) => <Habito name={x.name} days={x.days} id={x.id} atualizaHabitos={atualizaHabitos}/>)
                : <ParamHabit>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </ParamHabit>}
        </ContentPage>
    )


}

export default ContentHabit;

const ContentPage = styled.div`

    width:100%;
    height:auto;
    margin-top:80px;
    margin-bottom: 80px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items:center;



`;

const AddHabit = styled.div`

    width:100%;
    height:60px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 10px;


    h3{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    button{
        border-style:none;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        display:flex;
        justify-content:center;
        align-items:center;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }
`;



const ParamHabit = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    padding: 0 10px;
` 