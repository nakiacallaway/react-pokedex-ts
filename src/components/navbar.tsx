import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark text-center'>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link className='nav-link' to='/'>Pokedex</Link>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;