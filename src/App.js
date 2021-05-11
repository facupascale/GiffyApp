import './App.css';
import Home from '../src/pages/Home/index.js'
import { Route, Link } from 'wouter'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail/index'

function App() {
  return (
    <div className="App">
      <Link to='/'>HOME</Link>
    <Route component={Home} path='/' />
    <Route component={SearchResults} path='/search/:keyword' />
    <Route component={Detail} path='/gif/:id' />
    
    </div>
  );
}

export default App;
