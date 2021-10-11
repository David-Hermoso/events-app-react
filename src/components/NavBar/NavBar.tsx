import React from 'react';
import './NavBar.scss';
import NavLinks from '../NavLinks/NavLinks';

class NavBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <nav>
        <div className={'nav__section'}>
          <div className={'logo'}>
            Logo
          </div>
        </div>
        <div className={'nav__section'}>
          <NavLinks/>
        </div>
      </nav>)
  }
}

export default NavBar;
