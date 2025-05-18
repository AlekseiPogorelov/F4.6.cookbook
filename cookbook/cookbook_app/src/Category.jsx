import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import RecipeList from './RecipeList';

function Category() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/categories/${categoryId}/`)
      .then(res => res.json())
      .then(data => setCategory(data));
  }, [categoryId]);

  if (!category) return <div>Загрузка...</div>;

  return (
    <div className="container mt-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Главная</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {category.name}
          </li>
        </ol>
      </nav>

      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">{category.name}</h2>
          <p className="card-text">{category.description}</p>
        </div>
      </div>

      <h3 className="mb-3">Рецепты:</h3>
      {category.recipes && category.recipes.length > 0 ? (
        <RecipeList recipes={category.recipes} />
      ) : (
        <div className="alert alert-info">В этой категории пока нет рецептов</div>
      )}

      <div className="mt-4">
        <Link to="/" className="btn btn-outline-secondary">
          ← Назад к категориям
        </Link>
      </div>
    </div>
  );
}

export default Category;
