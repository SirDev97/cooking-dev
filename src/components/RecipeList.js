import { Link } from 'react-router-dom';

// firebase
import { projectFirestore } from '../firebase/config';

// hooks
import { useTheme } from '../hooks/useTheme';

// styles and icons
import './RecipeList.css';
import deleteIcon from '../assets/delete-icon.svg';

export default function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0)
    return <div className="error"> No recipes found... </div>;

  const handleDelete = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3> {recipe.title} </h3>
          <p>
            {recipe.cookingTime}
            to make.
          </p>
          <div> {recipe.method.substring(0, 100)}... </div>
          <Link to={`/recipes/${recipe.id}`}> Cook This </Link>
          <img
            src={deleteIcon}
            className="delete"
            onClick={() => handleDelete(recipe.id)}
            alt="trashcan icon"
          />
        </div>
      ))}
    </div>
  );
}
