import { useState } from "react";
import Checkmark from "./assets/img/checkmark-circle-icon.svg";
import Close from "./assets/img/close-circle-icon.svg";
import Help from "./assets/img/help-circle-icon.svg";
import Setinha from "./assets/img/setinha.png";
import Play from "./assets/img/play-outline-icon.svg";

export default function FlashCards(props) {

    const [primeiraDiv, SetPrimeiraDiv] = useState("");
    const [segundaDiv, SetSegundaDiv] = useState("escondido");
    const [terceiraDiv, SetTerceiraDiv] = useState("escondido");
    const [classe, Setclasse] = useState("");
    const [icone, setIcone] = useState(Play);
    const [svg, setSvg] = useState("icone");
    const [num, setNum] = useState(1);


    function clicaFlashcard(clique){
        switch (clique) {
            case 1:
                SetPrimeiraDiv("escondido");
                SetSegundaDiv('');
                break;

            case 2:
                SetSegundaDiv("escondido");
                SetTerceiraDiv('');
                break;

            case 3:
                SetTerceiraDiv("escondido");
                SetPrimeiraDiv('');
                Setclasse("vermelho");
                setIcone(Close);
                setSvg("svgErro");
                props.setContador(props.contador+1);
                setNum(6);
                break;

            case 4:
                SetTerceiraDiv("escondido");
                SetPrimeiraDiv('');
                Setclasse("amarelo");
                setIcone(Help);
                setSvg("svgDuvida");
                props.setContador(props.contador+1);
                setNum(6);
                break;
            
            case 5:
                SetTerceiraDiv("escondido");
                SetPrimeiraDiv('');
                Setclasse("verde");
                setIcone(Checkmark);
                setSvg("svgAcerto");
                props.setContador(props.contador+1);
                setNum(6);
                break;

            default:
                break;
        }
       console.log(num);
    }

    return (
        <>
            <div onClick={() => clicaFlashcard(num)} className={`numero-pergunta ${primeiraDiv}`}>
                <h3 className={`${classe}`}>Pergunta {props.i + 1}</h3>
                <img className={svg} src={icone} alt={icone} />
            </div>

            <div onClick={() => clicaFlashcard(2)} className={`aberto ${segundaDiv}`}>
                <h3> {props.pergunta} </h3>
                <img className="icone" src={Setinha} alt={Setinha} />
            </div>

            <div className={`resposta ${terceiraDiv}`}>
                <h3> {props.resposta}</h3>
                <div className="memoria">
                    <button onClick={() => clicaFlashcard(3)} className="error"> <h6>Não Lembrei</h6></button>
                    <button onClick={() => clicaFlashcard(4)} className="almost"> <h6>Quase não Lembrei</h6></button>
                    <button onClick={() => clicaFlashcard(5)} className="zap"> <h6>Zap!</h6></button>
                </div>
            </div>
        </>
    )
}