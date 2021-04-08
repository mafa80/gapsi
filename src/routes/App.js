import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Proveedores } from "../views/index"

import Wellcome from "../views/Wellcome"
import Partials from '../components/Partials'
function App() {
  return (
    <BrowserRouter>
      <Partials>
        <Switch>
          <Route exact path="/" component={Wellcome} />
          <Route exact path="/proveedores" component={Proveedores} />
        </Switch>
      </Partials>
    </BrowserRouter>
  );
}

export default App;
