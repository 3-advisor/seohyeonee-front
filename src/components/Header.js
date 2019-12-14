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
          <div className={style.headerBackground}>
            <NavLink to="/" className={style.titleLink}>
              <div className={style.subTitle}>Delicious Food</div>
              <h1 className={style.title}>SEOHYEONEE</h1>
            </NavLink>
            <button className={style.pickBtn}>PICK!</button>
          </div>
        </div >
      </div >
    );
  }
}

export default Header;
