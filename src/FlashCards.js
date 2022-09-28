import { useState } from "react";
import styled from 'styled-components';

import Checkmark from "./assets/img/checkmark-circle-icon.svg";
import Close from "./assets/img/close-circle-icon.svg";
import Help from "./assets/img/help-circle-icon.svg";
import Setinha from "./assets/img/setinha.png";
import Play from "./assets/img/play-outline-icon.svg";

export default function FlashCards(props) {

    const [primeiraDiv, SetPrimeiraDiv] = useState("flex");
    const [segundaDiv, SetSegundaDiv] = useState("escondido");
    const [terceiraDiv, SetTerceiraDiv] = useState("escondido");
    const [classe, Setclasse] = useState("#333333");
    const [icone, setIcone] = useState(Play);
    const [svg, setSvg] = useState("#333333");
    const [num, setNum] = useState(1);


    function clicaFlashcard(clique){
        switch (clique) {
            case 1:
                SetPrimeiraDiv("none");
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
                setSvg("invert(31%) sepia(94%) saturate(3050%) hue-rotate(342deg) brightness(102%) contrast(108%)");
                props.setContador(props.contador+1);
                setNum(6);
                break;

            case 4:
                SetTerceiraDiv("escondido");
                SetPrimeiraDiv('');
                Setclasse("amarelo");
                setIcone(Help);
                setSvg("invert(72%) sepia(18%) saturate(5162%) hue-rotate(335deg) brightness(100%) contrast(106%)");
                props.setContador(props.contador+1);
                setNum(6);
                break;
            
            case 5:
                SetTerceiraDiv("escondido");
                SetPrimeiraDiv('');
                Setclasse("verde");
                setIcone(Checkmark);
                setSvg("invert(59%) sepia(10%) saturate(3410%) hue-rotate(72deg) brightness(99%) contrast(88%)");
                props.setContador(props.contador+1);
                setNum(6);
                break;

            default:
                break;
        }
    }

    return (
        <>
            <DivNumeroPergunta onClick={() => clicaFlashcard(num)} numeroPergunta={primeiraDiv} cor={svg}>          
                <DivFlex>
                    <h3 className={classe} >Pergunta {props.i + 1}</h3>
                    <img src={icone} alt={icone} />
                </DivFlex>
            </DivNumeroPergunta>

            <DivAberto onClick={() => clicaFlashcard(2)} aberto={segundaDiv}>
                <h3> {props.pergunta} </h3>
                <ImgIcone src={Setinha} alt={Setinha} />
            </DivAberto>

            <DivResposta resposta={terceiraDiv}>
                <h3> {props.resposta}</h3>
                <DivMemoria>
                    <ButtonError onClick={() => clicaFlashcard(3)}> <h6>Não Lembrei</h6></ButtonError>
                    <ButtonAlmost onClick={() => clicaFlashcard(4)}> <h6>Quase não Lembrei</h6></ButtonAlmost>
                    <ButtonZap onClick={() => clicaFlashcard(5)}> <h6>Zap!</h6></ButtonZap>
                </DivMemoria>
            </DivResposta>
        </>
    )
}

const DivNumeroPergunta = styled.div`
    display: ${props => props.numeroPergunta };
    width: 300px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 10px 10px;
    cursor: pointer;
    font-family: 'Recursive', cursive;
    & img{
        margin-left: 170px;
        width: 23px;
        height: 23px;
        filter: ${props => props.cor};
    }
    & h3{
        margin-top: 5px;
    }
    .vermelho{
    color: var(--cor-nao-lembrei);
    text-decoration: line-through;
    font-weight:600;
    }

    .amarelo{
    color: var(--cor-quase-nao-lembrei);
    text-decoration: line-through;
    font-weight:600;
    }

    .verde{
    color: var(--cor-zap);
    text-decoration: line-through;
    font-weight:600;
    }

`

const DivAberto = styled.div`
    min-height: 130px;
    width: 300px;
    display: ${props => props.aberto === "escondido" ? "none" : "flex"};
    justify-content: space-between;
    background-color: var(--cor-fundo-card-aberto);
    cursor: default;
    margin-top: 10px;
    padding: 20px 10px;
    & img{
        margin-left: 0;
        margin-top: 90px;
        width: 23px;
        height: 23px;
        filter: ${props => props.cor};
    }
`

const DivResposta = styled.div`
    width: 100%;
    display: ${props => props.resposta === "escondido" ? "none" : "flex"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 130px;
    width: 300px;
    background-color: var(--cor-fundo-card-aberto);
    cursor: default;
    padding: 20px 10px;
    border-radius: 5px;
    margin-top: 10px; 
    & img{
        margin-left: 170px;
        width: 23px;
        height: 23px;
        filter: ${props => props.cor};
    }
`

const DivFlex = styled.div`
    display: flex;
`

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