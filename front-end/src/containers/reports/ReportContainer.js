import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReportMostPopularRooms from '../../components/reports/ReportMostPopularRooms';
import ReportList from '../../components/reports/ReportList';

class ReportContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="component-container">
                <Router>
                    <Fragment>
                        <Switch>
                            <Route exact path="/reports/most-popular-rooms" render={() => {
                                return(
                                    <ReportMostPopularRooms />
                                );
                            }} /> 
                            <Route component={ReportList} />
                        </Switch>
                    </Fragment>
                </Router>
            </div>
         );
    }
}
 
export default ReportContainer;