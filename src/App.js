import React, {useEffect, useState} from "react";
import axios from 'axios';
import './App.css';
import PokemonCards from "./components/pokemon/PokemonCards";
import Button from "./components/button/Button";



// Het resultaat opslaan in state.
// Een console log maken van het resultaat
// Bekijk wat je terug krijgt van de request in de dev tools

function  App() {
    const [pokemon, setPokemon] = useState  ([])
    const [endpoint, setEndpoint] = useState (`https://pokeapi.co/api/v2/pokemon/jigglypuff`)
    const [state, setState ]= useState ([])


    useEffect ( () => {
        async function getPokemonData() {
            try {
                const result = await axios.get  (`${endpoint}`)
                console.log ( result.data)
                setPokemon ( result.data)

            } catch (e) {
                console.error ( e )
            }
        }

        getPokemonData ()
    }, [endpoint])

    return (
        <div>
            <section className="button-bar">
                <Button
                    disabled={!pokemon.previous}
                    ClickHandler={() => setEndpoint(pokemon.previous)}
                >
                    Vorige
                </Button>
                <Button
                    disabled={!pokemon.next}
                    ClickHandler={() => setEndpoint(pokemon.next)}
                >
                    Volgende
                </Button>
            </section>


            {pokemon.results && pokemon.results.map ((pokemon) => {
                return <PokemonCards key={pokemon.name} endpoint={pokemon.url}/>
            })}
        </div>
    );
}

export default App;







