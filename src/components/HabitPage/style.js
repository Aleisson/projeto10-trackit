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

export {NavBarPage}

{/* <CircularProgressbar minValue={0} maxValue={7} value={7} text={`${0}%`} />
</Example> */}