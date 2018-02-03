import React, {Fragment} from 'react';
import {render} from 'react-dom';
import './app/themes/basic/basic.scss';
import {Controller} from "./app/containers/controller/controller";
import {User} from "./app/components/User";
import {BrowserRouter, Route} from 'react-router-dom';
import {Header} from "./app/containers/header/header";
import {Home} from "./app/components/Home";

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
            <Route path='/user' component={User}/>
            <Route path='/home' component={Home}/>
          </Controller>
        </Fragment>
    )
  }
}

render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));











