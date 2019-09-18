import React from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import {HashRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  return (<>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            {/*<Route path='/GameMain/' component={GameMain} />*/}
          </Switch>
        </HashRouter>
      </>
  );
}

export default App;
