import React from 'react';
import {Loader} from "../containers/loader/Loader";

export class Java_tuts extends React.PureComponent {
  render () {
    return (<div className='container java-tuts-container'>
      <Loader show={true}/>
    </div>);
  }
}