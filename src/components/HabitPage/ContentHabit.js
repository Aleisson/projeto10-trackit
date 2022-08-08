import styled from "styled-components";
import lixeira from "../../img/lixeira.png";

function Habito(title, days) {
   
    title = "Ler 1 capítulo de livro"
    return (
        <HabitoPage>
            <img src={lixeira} alt="lixeira"></img>
            <p>{title}</p>
            <DaysPage>
                <DayIN>D</DayIN>
                <DayOut>S</DayOut>
                <DayIN>T</DayIN>
                <DayOut>Q</DayOut>
                <DayIN>Q</DayIN>
                <DayOut>S</DayOut>
                <DayIN>S</DayIN>
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


    

    return (
        <ContentPage>
            <AddHabit>
                <h3>Meus hábitos</h3>
                <button>+</button>
            </AddHabit>
            <Habito/>
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

{/* <ParamHabit>
    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
</ParamHabit>

const ParamHabit = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    padding: 0 10px;
` */}