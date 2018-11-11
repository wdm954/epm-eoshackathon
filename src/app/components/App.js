import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Menu } from 'app/components/common';
import { ContractList, PackageProfile } from 'app/components/views';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="cols">
                    <div className="col app-menu">
                        <Menu/>
                    </div>
                    <div className="col">
                        <Switch>
                            <Route
                                path="/packages/:category/:package"
                                render={routerProps => <PackageProfile {...routerProps}/>}
                            />
                            <Route
                                path="/packages/:category"
                                render={routerProps => <ContractList {...routerProps}/>}
                            />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
