import logo from './logo.svg';
import './App.css';
import Homepage from './components/HomePage';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
function App() {
  return (
    <div className="Home">
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
