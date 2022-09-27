import LogoPequeno from "./assets/img/logo.png";
//import Close from "./assets/img/close-circle-icon.svg";
import Play from "./assets/img/play-outline-icon.svg";


export default function App() {

    return (
        <>

            <header className="header">
                <img src={LogoPequeno} alt="logo zapRecall" />
                <h1> ZapRecall </h1>
            </header>

            <main className="main">
                <section className="flashcard">
                    <h3>pergunta 1</h3>
                    <img className="icone" src={Play} alt={Play}/> 
                    <div>
                        <button>
                            
                        </button>
                    </div>

                </section>

               
            </main>


            <footer className="footer">
                <h1>0/4 CONCLUÍDOS</h1>
            </footer>
        </>
    )
}