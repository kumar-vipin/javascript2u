import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../themes/basic/header.scss';

export class Header extends React.Component {
  render () {
    return (<div className='header-container'>
      <div className='header-bar'>
        <NavLink to='/ES5' activeClassName={'active'}>ECMAScript 5</NavLink>
        <NavLink to='/ES6' activeClassName={'active'}>ECMAScript 6</NavLink>
        <NavLink to='/Java' activeClassName={'active'}>JAVA</NavLink>
        <NavLink to='/ReactJs' activeClassName={'active'}>ReactJs</NavLink>
      </div>
    </div>);
  }
}