import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Countries from '../pages/countries';
import Detail from '../pages/detail';

class Routes extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Countries} />
                    <Route exact path="/countries" component={Countries} />
                    <Route exact path="/detail/:slug" component={Detail} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;