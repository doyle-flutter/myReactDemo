// import logo from './logo.svg';
import './App.css';
// yarn add react-router-dom
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppBar from './pages/Common/AppBar.js';
import MainPage from './pages/Main/MainPage.js';
import SubPage from './pages/Sub/SubPage.js';

const App = () => {
  return (
    <div style={{margin:0,padding:0}}>
      <Router>
        <Switch>
          <Route exact path="/myReactDemo/sub">
            <AppBar id={1}/>
            <SubPage />
          </Route>
          <Route exact path="/myReactDemo">
            <AppBar id={0}/>
            <MainPage />
          </Route>
          <Route exact path="/">
            <AppBar id={0}/>
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
