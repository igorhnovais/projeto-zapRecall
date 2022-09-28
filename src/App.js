import Deck from "./Deck.js";
import FlashCards from "./FlashCards.js";


import LogoPequeno from "./assets/img/logo.png";

import { useState } from "react";


export default function App() {
    const [quantidadeCards, setQuantidadeCards] = useState(8);
    const [contador, setContador] = useState(0);
    
    return (
        <>
            <header className="header">
                <img src={LogoPequeno} alt="logo zapRecall" />
                <h1> ZapRecall </h1>
            </header>

            <main className="main">
                <section>
                   {Deck.map((item, i) => <FlashCards 
                   i={i} 
                   pergunta={item.pergunta} 
                   resposta={item.resposta}
                   contador={contador}
                   setContador={setContador}
                   key={i}/> )}   
                </section>
            </main>

            <footer className="footer">
                <h1>{contador}/{quantidadeCards} CONCLUÍDOS</h1>
            </footer>
        </>
    )
}