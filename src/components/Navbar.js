import { Link } from 'react-router-dom';

// hooks
import { useTheme } from '../hooks/useTheme';

// styles
import './Navbar.css';

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Warrior</h1>
        </Link>
        <Link to="create">Create Recipe</Link>
      </nav>
    </div>
  );
}
