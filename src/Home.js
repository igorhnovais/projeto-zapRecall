import Logo from "./assets/img/logo.png"
import styled from 'styled-components';
import SelectDeck from "./SelectDeck";


export default function Home(props) {
    const {mudaLayout, setMudalayout, setAparecePergunta, setEscolheDeck} = props
    

    function irParaPerguntas(){

        setMudalayout("none");
        setAparecePergunta("flex");
    
    }

    return (
        <MainHome aparecePerguntas={mudaLayout} >
            <img src={Logo} alt={"logo"}></img>
            <h1>ZapRecall</h1>
            <SelectDeck setEscolheDeck={setEscolheDeck}/>
            <button onClick={irParaPerguntas} data-identifier="start-btn"> Iniciar Recall! </button>
        </MainHome>
    )
}

const MainHome = styled.main`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: ${props => props.aparecePerguntas};
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
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.20);
        cursor: pointer;
    }
    & button:hover {
        background-color: #cea2a0
    }
`