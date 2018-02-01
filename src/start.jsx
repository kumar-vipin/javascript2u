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
                <Header/>
                <Controller>
                    <Route path='/user' component={User}/>
                    <Route path='/home' component={Home}/>
                </Controller>
            </Fragment>
        )
    }
}

render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));











