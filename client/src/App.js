import './App.css';
import Input from './components/Input';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Redi from './components/Redi';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <h1 className='head'><em><u>URL Shortner</u></em></h1>
            <Input />
          </div>
        </Route>
        <Route path='/t/:link' >
          <Redi/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
