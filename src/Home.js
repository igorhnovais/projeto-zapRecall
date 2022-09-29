import Logo from "./assets/img/logo.png"
import styled from 'styled-components';

export default function Home(){

    function irParaPerguntas(props){
        const {mudaLayout, setMudaLayout} = props

        
    }
    
    return (
        <MainHome>
            <img src={Logo}></img>
            <h1>ZapRecall</h1>
            <button onClick={irParaPerguntas}> Iniciar Recall! </button>
        </MainHome>
    )
}

const MainHome = styled.main`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    position: absolute;
    background-color: var(--cor-fundo);
    & h1{
        font-family: "Righteous", cursive;
        font-size: 36px;
        color: white;
        margin-top: 30px;
    }
    & button{
        width: 246px;
        height: 54px;
        padding: 16px 22px;
        border-radius: 5px;
        margin-top: 30px;
        color: #D70900;
        border: 1px;
        font-size: 18px;
        cursor: pointer;
    }
    & button:hover {
        background-color: #cea2a0
    }
`