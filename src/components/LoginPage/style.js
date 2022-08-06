import styled from "styled-components";

const LoginPage = styled.div`

    /* background-color:crimson; */
    width:100%;
    height: 420px;
    margin: calc(60% - 120px) auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;

    img{
        width:180px;
        height:180px
    }

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;     
    }
`



const LoginForm = styled.form`
    /* background-color: blue; */
    height: 180px;
    width: auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;

    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 10px;
    }

    input::placeholder{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }

    button{
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border-style: none;
        display: flex;
        align-items:center;
        justify-content:center;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;

    }
`

export {LoginPage, LoginForm};