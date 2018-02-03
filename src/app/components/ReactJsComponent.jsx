import React from 'react';
import {Loader} from "../containers/loader/Loader";

export class ReactJsComponent extends React.PureComponent {
  render () {
    return (<div className='container react-js-container'>
      <Loader show={true}/>
    </div>)
  }
}