import React from "react";
import axios from 'axios';
import './PokemonCards.module.css';




const PokemonCards = ({url}) => {
    const [pokemon, setPokemon] = useState ([])

    let deps;
    useEffect ( () => {
        async function getPokemonData() {
            try {
                const result = await axios.get ( `${url}` )
                setPokemon ( result.data )
            } catch (e) {
                console.error ( e )
            }
        }

        getPokemonData ();
    },   [])


    return (
        <div>
            {Object.keys(pokemon).length > 0 &&
            <>
                <h1>{pokemon.name}</h1>
                <h3>{pokemon.weight}</h3>
                <img scr={pokemon.sprites.front_default} alt="pokemon plaatje"/>
            </>
            }
        </div>

    );
};

export default PokemonCards;
