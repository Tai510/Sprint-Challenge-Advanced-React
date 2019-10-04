import React from 'react';

const Navbar = (props) => {

  return (
    <nav className="navbar">
      <h1>Players List Enter The Matrix <i class="fas fa-arrow-right"></i></h1>
      <div className="dark-mode__toggle">
        <div
          onClick={props.toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;