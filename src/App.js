import { BrowserRouter, Switch, Route } from 'react-router-dom';

// hooks
import { useTheme } from './hooks/useTheme';

// components
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';

// pages
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';

// styles
import './App.css';

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
