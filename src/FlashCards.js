import { useState } from "react";
import styled from 'styled-components';

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
    }

    return (
        <>
            <div onClick={() => clicaFlashcard(num)} className={`numero-pergunta ${primeiraDiv}`}>
                <h3 className={`${classe}`}>Pergunta {props.i + 1}</h3>
                <img className={svg} src={icone} alt={icone} />
            </div>

            <div onClick={() => clicaFlashcard(2)} className={`aberto ${segundaDiv}`}>
                <h3> {props.pergunta} </h3>
                <ImgIcone src={Setinha} alt={Setinha} />
            </div>

            <div className={`resposta ${terceiraDiv}`}>
                <h3> {props.resposta}</h3>
                <DivMemoria>
                    <ButtonError onClick={() => clicaFlashcard(3)}> <h6>Não Lembrei</h6></ButtonError>
                    <ButtonAlmost onClick={() => clicaFlashcard(4)}> <h6>Quase não Lembrei</h6></ButtonAlmost>
                    <ButtonZap onClick={() => clicaFlashcard(5)}> <h6>Zap!</h6></ButtonZap>
                </DivMemoria>
            </div>
        </>
    )
}

const ImgIcone = styled.img`
    color: var(--preto);
    width: 23px;
    height: 23px;

`

const DivMemoria = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 10px;
`

const ButtonError = styled.button`
    width: 100%;
    height: 40px;
    background-color: green;
    color: white;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--cor-nao-lembrei);
    &:hover{
        filter: brightness(0.7)
    }
`

const ButtonAlmost = styled.button`
    width: 100%;
    height: 40px;
    background-color: green;
    color: white;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--cor-quase-nao-lembrei);
    &:hover{
        filter: brightness(0.7)
    }
`

const ButtonZap = styled.button`
    width: 100%;
    height: 40px;
    background-color: green;
    color: white;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--cor-zap);
    &:hover{
        filter: brightness(0.7)
    }
`