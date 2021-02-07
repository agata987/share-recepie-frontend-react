import Header from './components/Header';
import SideBar from './components/SideBar';
import RecepiesView from './components/views/RecepiesView';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div id="main-container">
      <Header />
      <div id="main-content">
        <Router>
          <SideBar />
          <Switch>
            <Route path="/breakfast">
              <RecepiesView type="breakfast" />
            </Route>
            <Route path="/lunch">
              <RecepiesView type="lunch" />
            </Route>
            <Route path="/dinner">
              <RecepiesView type="dinner" />
            </Route>
            <Route path="/snacks">
              <RecepiesView type="snacks" />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
