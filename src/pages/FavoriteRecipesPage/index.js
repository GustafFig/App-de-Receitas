import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import CardFavDone from '../../components/CardFavDone';
import './index.css';


function FavoriteRecipesPage() {
  const data = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [ results, setResults ] = useState(data);
  const [ filter, setFilter ] = useState('data');
  
  useEffect(() => {
    setResults(data.filter((el) => el.type === filter))
  }, [filter]);

  return (
    <div className='fav-list'>
      <Header titleTag="Receitas Favoritas" />
      <button onClick={() => setFilter('comida')} data-testid="filter-by-food-btn">Food</button>
      <button onClick={() => setFilter('bebida')} data-testid="filter-by-drink-btn">Drink</button>
      <button onClick={() => setResults(data)} data-testid="filter-by-all-btn">All</button>
      <div className="fav-grid">
        {results.map((elem) => <CardFavDone {...elem} />)}
      </div>
    </div>
  );
}

export default FavoriteRecipesPage;
