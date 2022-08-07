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

export {NavBarPage, MenuPage, DivContagem}

{/* <CircularProgressbar minValue={0} maxValue={7} value={7} text={`${0}%`} />
</Example> */}