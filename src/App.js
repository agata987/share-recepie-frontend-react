import Header from './components/Header';
import SideBar from './components/SideBar';

import MainView from './components/views/MainView';
import RecepiesView from './components/views/RecepiesView';
import TipsView from './components/views/TipsView';
import DietView from './components/views/DietView';
import NewsView from './components/views/NewsView';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div id="main-container">
      <Header />
      <div id="main-content">
        <Router>
          <SideBar />
          <Switch>
            <Route path="/recepies">
              <RecepiesView />
            </Route>
            <Route path="/tips">
              <TipsView />
            </Route>
            <Route path="/diet">
              <DietView />
            </Route>
            <Route path="/news">
              <NewsView />
            </Route>
            <Route path="/">
              <MainView />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
