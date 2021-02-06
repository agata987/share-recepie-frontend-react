import Header from './components/Header';
import Navbar from './components/NavBar';
import RecepiesView from './components/views/RecepiesView';

function App() {
  return (
    <div id="main-container">
      <Header />
      <Navbar />
      <RecepiesView />
    </div>
  );
}

export default App;
