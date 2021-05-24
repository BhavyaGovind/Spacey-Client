import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="Home">
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
