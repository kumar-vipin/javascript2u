import React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.PureComponent {
    render () {
        return (
            <div className='header-container'>
                <div className='header-bar'>
                    <ul className='nav navbar-nav'>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/user'>User</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
};