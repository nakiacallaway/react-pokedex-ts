import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import HomePage from '../pages/Home';
import SinglePokemonPage from '../pages/SinglePokemon';

const AppRoutes: React.FC = () => {
  return (
    <div className='container'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route
          path='/pokemon/:pokemonName'
          exact
          component={SinglePokemonPage}
        />
      </Switch>
      {/* Footer */}
    </div>
  );
};

export default AppRoutes;
