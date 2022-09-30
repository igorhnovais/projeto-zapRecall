import Deck from "./Deck.js";
import FlashCards from "./FlashCards.js";
import Reset from "./Reset.js";
import GlobalStyle from "./GlobalStyle.js";
import Home from "./Home.js"

import LogoPequeno from "./assets/img/logo.png";

import { useState } from "react";
import styled from 'styled-components';


export default function App() {
    const [contador, setContador] = useState(0);
    const [mudaLayout, setMudalayout] = useState("flex");
    const [aparecePergunta, setAparecePergunta] = useState("none");
    const [escolheDeck, setEscolheDeck] = useState(0);
    let deckEscolhido = Deck[escolheDeck];


    return (

        <>
            <Reset />
            <GlobalStyle />

            <Home mudaLayout={mudaLayout} setMudalayout={setMudalayout} setAparecePergunta={setAparecePergunta} setEscolheDeck={setEscolheDeck}/>

            <BodyStyle escondeHome={aparecePergunta}>

                <Header>
                    <img src={LogoPequeno} alt="logo zapRecall" />
                    <h1> ZapRecall </h1>
                </Header>

                <Main>
                    <section>
                        {deckEscolhido.map((item, i) => <FlashCards
                            i={i}
                            pergunta={item.pergunta}
                            resposta={item.resposta}
                            contador={contador}
                            setContador={setContador}
                            key={i} />)}
                    </section>
                </Main>

                <Footer>
                    <h1>{contador}/{deckEscolhido.length} CONCLUÍDOS</h1>
                </Footer>
            </BodyStyle>
        </>
    )
}


const BodyStyle = styled.div`   
    width: 100vw;
    height: 100vh;
    display: ${props => props.escondeHome}; 
    justify-content: center;
    align-items: center;
    color: var(--preto);
    font-family: 'Recursive', sans-serif;
    /*font-family: 'Righteous', cursive;*/ 
    background-color: var(--cor-fundo);
`

const Header = styled.header`
    position: fixed;
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 10px 0;
    font-size: 36px;
    color: white;
    font-family: "Righteous";
    z-index: 1;
    background-color: var(--cor-fundo);
    & img{
        width: 52px;
        height: 60px;
        margin-right: 20px;
    }
`

const Main = styled.main`
    max-height: 480px;
    overflow-y: auto;
    &::-webkit-scrollbar{
        display: none; 
    }
`

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    min-height: 70px;
    padding: 14px 10px;
    font-size: 18px;
    color: black;
    position: fixed;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
