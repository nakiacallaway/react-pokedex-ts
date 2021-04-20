import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { pokemonData } from '../data/pokemonData';
import { setTypeColor } from '../services';

interface PokeProp {
    name: string;
    img: string;
    type: string[]; 
    height: string;
    weight: string;
    weaknesses: string[]
};

const PokeCard: React.FC = () => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const { pokemonName } = useParams<{ pokemonName: string }>();
    
    return (
        <div className='row'>
            <div className='col'>
                <ul className='list-group'>
                    {.map((poke, i) => {
                        return (
                            <li className='list-group-item d-flex justify-content-around align-items-center' key={i}>
                            <img src={poke.img} alt={poke.name} />
                            <div className='poke-info'>
                                <h2><Link to={`/pokemon/${poke.name.toLowerCase()}`}> {poke.name}</Link></h2>
                                <div>
                                    <small>Height: {poke.height}</small>
                                    <small>Weight: {poke.weight}</small>
                                </div>
                            </div>
                            </li>
                        );
                      })}
                </ul>
            </div>
        </div>
    );
};

export default PokeCard;