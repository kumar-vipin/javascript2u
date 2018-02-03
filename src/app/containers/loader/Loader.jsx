import PropTypes from 'prop-types';
import React from 'react';
import '../../themes/basic/loader.scss';

export class Loader extends React.Component {

  render () {
    if(this.props.show) {
      return (<div className='loader-container'>/**/</div>);
    }
    return null;
  }
}

Loader.propTypes = {
  show: PropTypes.bool
};