import React from 'react';
import {Link} from 'react-router-dom';
import '../../themes/basic/header.scss';

export class Header extends React.PureComponent {
  render () {
    return (<div className='header-container'>
      <div className='header-bar'>
        <Link to='/home' className={'active'}>ECMAScript 5</Link>
        <Link to='/user'>ECMAScript 6</Link>
        <Link to='/user'>JAVA</Link>
        <Link to='/user'>ReactJs</Link>
        <Link to='/user'>Css</Link>
      </div>
    </div>);
  }
}