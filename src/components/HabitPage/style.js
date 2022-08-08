import styled from "styled-components";

const NavBarPage =styled.div`

    width: 100%;
    height: 80px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    left:0;

    p{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }

    img{
        background-color:#FFFFFF;
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }

  
`;

const MenuPage = styled.div`

    position: fixed;
    width: 100%;
    height: 80px;
    left: 0;
    bottom: 0;
    background: #ffffff;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items:center;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }


`;

const DivContagem = styled.div`

    width:80px;
    position:relative;
    bottom: 30px;
    display:flex;
    align-items:center;
    justify-content:center;
    
    .CircularProgressbar-text {
    transform: translate(-20px, 5px);
}
`


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

const ContentPage = styled.div`

    width:100%;
    height:auto;
    margin-top:80px;
    margin-bottom: 100px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items:center;



`;


export {NavBarPage, MenuPage, DivContagem,AddHabit,ParamHabit, ContentPage}

