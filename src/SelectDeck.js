import styled from "styled-components";

export default function SelectDeck({setEscolheDeck}){
    return (
        <DivSelect>
            <select onChange={(e) => setEscolheDeck(e.target.value)} data-identifier="deck-selector">
                <OptionNone value={0} data-identifier="deck-option"> Escolha o seu Deck </OptionNone>
                <option value={0} data-identifier="deck-option"> React Deck </option>
                <option value={1} data-identifier="deck-option"> PercyJackson Deck </option>
                <option value={2} data-identifier="deck-option"> HarryPotter Deck </option>
                <option value={3} data-identifier="deck-option"> Pokémon Deck </option>
                <option value={4} data-identifier="deck-option"> GreekMythology Deck </option>
                <option value={5} data-identifier="deck-option"> LoL Deck </option>
            </select>
        </DivSelect>
    )
}

const DivSelect = styled.div`
    margin-top: 30px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.20);
    :hover{
        cursor: pointer;
    }
    Select{
        width: 246px;
        height: 60px;
        border-radius: 5px;
        font-size: 16px;
        padding: 10px;
    }

`
const OptionNone = styled.option`
    display: none;
`