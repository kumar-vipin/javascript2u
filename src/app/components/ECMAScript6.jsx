import React from 'react';
import {Loader} from "../containers/loader/Loader";

export class ECMAScript6 extends React.PureComponent {
  render () {
    return (<div className='container ecmascript-6-container'>
      <Loader show={true}/>
    </div>)
  }
}