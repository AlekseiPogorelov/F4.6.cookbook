import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/categories/')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Категории рецептов</h1>
        <p className="lead">Выберите категорию и найдите свой идеальный рецепт!</p>
      </div>
      <div className="row justify-content-center">
        {categories.length === 0 ? (
          <div className="col-12 text-center">
            <div className="alert alert-info">Категории пока не добавлены</div>
          </div>
        ) : (
          categories.map(category => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={category.id}>
              <Link to={`/categories/${category.id}`} className="text-decoration-none">
                <div className="card h-100 shadow-sm border-0 text-center">
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h5 className="card-title mb-2">{category.name}</h5>
                    <p className="card-text text-muted" style={{fontSize: '0.95em'}}>
                      {category.description || ' '}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;