import { Fragment } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { ReactComponent as TedLogo } from '../../../assets/clothes-svgrepo-com.svg';

import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
          <TedLogo className='logo'/>
          </Link>
          
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
            SHOP
            </Link>
            <Link className='nav-link' to='/auth'>
            SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  };

export default Navigation;