import React, {Fragment} from 'react';
import {render} from 'react-dom';
import './app/themes/basic/basic.scss';
import {Controller} from "./app/containers/controller/controller";
import {ECMAScript6} from "./app/components/ECMAScript6";
import {BrowserRouter, Route} from 'react-router-dom';
import {Header} from "./app/containers/header/header";
import {ECMAScript5} from "./app/components/ECMAScript5";
import {Java_tuts} from "./app/components/Java_tuts";
import {ReactJsComponent} from "./app/components/ReactJsComponent";

class App extends React.Component {
  render () {
    return (
        <Fragment>
          <div className={'top-wrapper'}>
            <div className='logo-wrapper'>
              <span className={'text pre-text'}>Java</span>
              <span className={'text post-text'}>Script</span>
              <span className={'text text-2'}>2</span>
              <span className={'text text-u'}>u</span>
            </div>
          </div>

          <Controller>
            <Header/>
            <Route path='/' exact component={ECMAScript5}/>
            <Route path='/ES5' exact component={ECMAScript5}/>
            <Route path='/ES6' component={ECMAScript6}/>
            <Route path='/Java' component={Java_tuts}/>
            <Route path='/ReactJs' component={ReactJsComponent}/>
          </Controller>
        </Fragment>
    )
  }
}

render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));











