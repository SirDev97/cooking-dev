import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/create">
            <Create />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recipe/:id">
            <Recipe />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
