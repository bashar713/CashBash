import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Users/Login';
import Register from './pages/Users/Register';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
