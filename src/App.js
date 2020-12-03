// import logo from './logo.svg';
import './App.css';
// yarn add react-router-dom
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from './pages/MainPage.js'
import SubPage from './pages/SubPage.js'

const App = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Switch>
        <Route path="/myReactDemo/sub">
          <SubPage />
        </Route>
        <Route path="/myReactDemo">
          <MainPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      {/* <Route path="/myReactDemo" component={MainPage}/>
      <Route path="/myReactDemo/sub" component={SubPage}/> */}
    </Router>
  );
}

export default App;
