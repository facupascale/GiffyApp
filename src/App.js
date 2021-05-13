import './App.css';
import Home from '../src/pages/Home/index.js'
import { Route, Link } from 'wouter'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail/index'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';


function App() {
  return (
  <StaticContext.Provider>
    <div className="App">
      <Link to='/'>HOME</Link>
    <GifsContextProvider>
        <Route component={Home} path='/' />
        <Route component={SearchResults} path='/search/:keyword' />
        <Route component={Detail} path='/gif/:id' />
      </GifsContextProvider>
    </div>
  </StaticContext.Provider>
  );
}

export default App;
