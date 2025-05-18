import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Recipe() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/recipes/${recipeId}/`)
      .then(res => res.json())
      .then(data => setRecipe(data));
  }, [recipeId]);

  if (!recipe) return <div>Загрузка...</div>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      {recipe.image && (
        <img src={recipe.image} alt={recipe.title} style={{ maxWidth: 400 }} />
      )}
      <h3>Ингредиенты:</h3>
      <ul>
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
      <h3>Инструкция:</h3>
      <ol>
        {recipe.instructions.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
      <p><strong>Время приготовления:</strong> {recipe.cook_time ? `${recipe.cook_time} мин.` : '-'}</p>

      <div>
        <Link to={`/categories/${recipe.category}`}>← Назад к категории</Link>
      </div>
    </div>
  );
}

export default Recipe;
