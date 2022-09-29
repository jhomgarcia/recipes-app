import React from 'react';
import RecipeInProgress from '../components/RecipeInProgress';

function DrinksRecipesProgress() {
  return (
    <div>
      Drinks Recipes Progress
      <RecipeInProgress isDrink={ true } />
    </div>
  );
}

export default DrinksRecipesProgress;
