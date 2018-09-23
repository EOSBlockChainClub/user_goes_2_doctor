import React from 'react';
import WrappedLink from './WrappedLink';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <div className='MainMenuWrapper'>
      <WrappedLink to="/">{'home'}</WrappedLink>
      <WrappedLink to="/about">{'About'}</WrappedLink>
      <WrappedLink to="/code">{'code'}</WrappedLink>
      <WrappedLink to="/code">{'contact'}</WrappedLink>
      <WrappedLink to="/info">{'info'}</WrappedLink>
    </div>
  );
};

export default MainMenu;
