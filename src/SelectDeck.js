import styled from "styled-components";

export default function SelectDeck({setEscolheDeck}){
    return (
        <DivSelect>
            <select onChange={(e) => setEscolheDeck(e.target.value)}>
                <OptionNone value={0}> Escolha o seu Deck </OptionNone>
                <option value={0}> React Deck </option>
                <option value={1}> PercyJackson Deck </option>
                <option value={2}> HarryPotter Deck </option>
                <option value={3}> Pokémon Deck </option>
                <option value={4}> GreekMythology Deck </option>
                <option value={5}> LoL Deck </option>
            </select>
        </DivSelect>
    )
}

const DivSelect = styled.div`
    margin-top: 30px;
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