import React from 'react';
import { NavLink } from 'react-router-dom';

import style from '../scss/Layout.scss';

class Header extends React.Component {
  constructor() {
    super();
    this.linkList = [
      {
        path: '/',
        exact: true,
        text: 'Home',
      },
    ];
  }

  render() {
    return (
      <div className={style.header}>
        <div className={style.headerInner}>
          <h1 className={style.title}>
            <NavLink to="/" className={style.titleLink}>서혀니</NavLink>
          </h1>
          <nav className={style.nav}>
            <ul className={style.navList}>
              {
                this.linkList.length > 1 && this.linkList.map(item => (
                  <li className={style.navItem} key={item.name}>
                    <NavLink to={item.path} exact={item.exact}
                      className={style.navLink} activeClassName={style.active}>
                      {item.text}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div >
      </div >
    );
  }
}

export default Header;
