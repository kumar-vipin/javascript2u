import React from 'react';
import '../../themes/basic/controller.scss';

export class Controller extends React.PureComponent {
  render () {
    return (
        <div className='controller'>
          {this.props.children}
        </div>
    )
  }
}