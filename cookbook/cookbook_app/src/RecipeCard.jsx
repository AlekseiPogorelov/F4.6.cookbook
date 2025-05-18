import React from 'react';
import Card from 'react-bootstrap/Card';

function RecipeCard({ recipe }) {
  return (
    <Card style={{ width: '22rem', margin: '1rem' }}>
      {recipe.image && (
        <Card.Img
          variant="top"
          src={recipe.image}
          alt={recipe.title}
          style={{ objectFit: 'cover', height: '220px' }}
        />
      )}
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          <b>Категория:</b> {recipe.category_name || recipe.category}<br />
          <b>Время:</b> {recipe.cook_time ? `${recipe.cook_time} мин.` : '-'}
        </Card.Text>
        <a href={`/recipes/${recipe.id}`} className="btn btn-primary">Подробнее</a>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;
