import Conteudo from "./Conteudo.js"

import LogoPequeno from "./assets/img/logo.png";
import Setinha from "./assets/img/setinha.png";
import Play from "./assets/img/play-outline-icon.svg";


export default function App() {

    return (
        <>
            <header className="header">
                <img src={LogoPequeno} alt="logo zapRecall" />
                <h1> ZapRecall </h1>
            </header>

            <main className="main">
                <section>
                    <div className="numero-pergunta escondid">
                        <h3>Pergunta 1</h3>
                        <img className="icone" src={Play} alt={Play} />
                    </div>
                    <div className="aberto escondid">
                        <h3> O que é JSX? </h3>
                        <img className="icone" src={Setinha} alt={Setinha}/>                       
                    </div>
                    <div className="resposta escondid">
                        <h3> Uma extensão de linguagem do JavaScript</h3>
                        <div className="memoria">
                            <button className="error"> <h6>Não Lembrei</h6></button>
                            <button className="almost"> <h6>Quase não Lembrei</h6></button>
                            <button className="zap"> <h6>Zap!</h6></button>
                        </div>
                    </div>
                </section>


            </main>


            <footer className="footer">
                <h1>0/4 CONCLUÍDOS</h1>
            </footer>
        </>
    )
}