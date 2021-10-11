import React from 'react';
import './NavLinks.scss';
import { NavLink } from 'react-router-dom';

class NavLinks extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <ul className={'navitems__list'}>
        <li className={'nav__item'}>
          <NavLink

            to={'/allEvents'}
            className={'nav__link'}>
            All events
          </NavLink>

        </li>
        <li className={'nav__item'}>
          <NavLink
            to={'/myEvents'}
            className={'nav__link'}>
            My events
          </NavLink>
        </li>
      </ul>)
  }
}

export default NavLinks;
