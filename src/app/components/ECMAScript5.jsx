import React from 'react';
import {NavLink} from 'react-router-dom';
import '../themes/basic/ecmascript5.scss';

export class ECMAScript5 extends React.Component {
  render () {
    return (
        <div className='container ecmascript-5-container'>
          <div className={'content-link-wrapper'}>
            <div className={'list-item'}>
              <NavLink to='/ES5/Objects' activeClassName={'active'}>Objects</NavLink>
            </div>
            <div className={'list-item'}>
              <NavLink to='/ES5/Events' activeClassName={'active'}>Event Order</NavLink>
            </div>
          </div>
          <div className={'content-wrapper'}>
            {this.props.children}
          </div>
        </div>
    )
  }
}