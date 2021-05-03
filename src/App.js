import './App.css';
import Home from '../src/pages/Home/index.js'
import { Route } from 'wouter'

function App() {
  return (
    <div className="App">
    <Route component={Home} path='/' />
    </div>
  );
}

export default App;
