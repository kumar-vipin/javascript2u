import React from 'react';

export class Controller extends React.PureComponent {
  render () {
    return (
        <div className='controller'>
          {this.props.children}
        </div>
    )
  }
}