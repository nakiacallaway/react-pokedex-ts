import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { pokemonData } from '../data/pokemonData';
import { setTypeColor } from '../services';

const HomePage: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>(pokemonData);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const foundPoke = pokemonData.filter(pk => {
      return pk.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    searchTerm === '' ? setPokemon(pokemonData) : setPokemon(foundPoke);
  }, [searchTerm]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div id='home'>
      <div className='row text-center my-3'>
        <div className='col'>
          <h2>Welcome to the Pokemon Pokedex!</h2>
          <h4 className='text-secondary'>
            The world's 38th best pokemon database!!
          </h4>
        </div>
      </div>

      <div className='row my-3'>
        <div className='col'>
          <form action=''>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                value={searchTerm}
                onChange={handleChange}
                placeholder='Search Pokemon by Name...'
              />
            </div>
          </form>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <ul className='list-group'>
          <div className="row" >
            {pokemon.map((poke, index) => {
              return (
              <div className='col-3' key={index}>
                <li className='list-group-item d-flex justify-content-around align-items-center'>
                 <div className='poke-info text-center'>
                    <h2><Link to={`/pokemon/${poke.name.toLowerCase()}`}>{poke.name}</Link></h2>
                    <img src={poke.img} alt={poke.name} />
                    <div>
                      <small>Height: {poke.height} | Weight: {poke.weight}</small>
                    </div>
                    <div>
                      {poke.type.map((t, i) => {
                        return (
                          <span className='badge badge-pill text-white mx-1' style={{ backgroundColor: setTypeColor(t) }} key={i}> {t} </span>
                          );
                        })}
                    </div>
                    <div className='text-secondary'>Weaknesses</div>
                      <div>{poke.weaknesses.map((w, i) => {
                        return (
                          <span className='badge badge-pill text-white mx-1' style={{ backgroundColor: setTypeColor(w) }} key={i}> {w} </span>
                        );
                      })}
                    </div>
                  </div>
                </li>
                </div>  
                
             );
            })}
          </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
