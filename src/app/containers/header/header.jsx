import React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.PureComponent {
  render () {
    return (<div className='header-container'>
      <div className='header-bar'>
        <Link to='/home'>Home</Link>
        <Link to='/user'>User</Link>
      </div>
    </div>);
  }
}