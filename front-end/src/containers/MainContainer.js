import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GuestContainer from './guests/GuestContainer';

class MainContainer extends Component {
    render() { 
        return ( 
            <div className="main-container">
            <p>Test</p>
                <Router>
                    <Fragment>
                        <Switch>
                            <Route path="/guests" component={GuestContainer} />
                        </Switch>
                    </Fragment>
                </Router>
            </div>
         );
    }
}
 
export default MainContainer;