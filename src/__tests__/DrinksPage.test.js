import React from 'react';
import { render, waitForDomChange, cleanup } from '@testing-library/react';
import { Router } from 'react-router-dom';

import { createMemoryHistory } from 'history';
// import drinkCategories from '../../cypress/mocks/drinkCategories';

import { DrinksPage } from '../pages';
import Provider from '../contexts/Provider';

import drinks from '../../cypress/mocks/drinks';

const renderWithContext = (children, route = '/') => {
  const history = createMemoryHistory({ initialEntries: [route] });
  return {
    ...render(
      <Router history={history}>
        <Provider>{children}</Provider>
      </Router>
    ),
    history
  };
};

const mockedFetch = (url) => Promise.resolve({
  ok: 200,
  json: () => {
    switch (url) {
      case 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=':
        return Promise.resolve(drinks);
        // return Promise.resolve(drinkCategories);
      default: return Promise.reject('test, wrong'); 
    }
  },
})

const clean = () => {
  cleanup();
};

describe('DrinksPage', () => {
  afterEach(clean);
  const fetch = jest.spyOn(global, 'fetch').mockImplementation(mockedFetch);

  test('should open whth a requisition and a message of loading', async () => {
    const { getByText } = renderWithContext(<DrinksPage />);
    
    expect(getByText('Loading...')).toBeInTheDocument(); // not essencial for cy

    await waitForDomChange();
    expect(fetch).toHaveBeenCalledTimes(1);

    expect(getByText('Bebidas')).toBeInTheDocument();  
  });

  test('should render 12 Cards with image', async () => {
    const { getByTestId } = renderWithContext(<DrinksPage />);

    await waitForDomChange();

    drinks.drinks.slice(0, 12).forEach((drink, index) => {
      const card = getByTestId(`${index}-recipe-card`);
      expect(card).toBeInTheDocument();
      const cardName = getByTestId(`${index}-card-name`);
      expect(cardName).toHaveTextContent(drink.strDrink)
      const cardImage = getByTestId(`${index}-card-img`, drink.strDrinkThumb);
      expect(cardImage).toHaveAttribute('src');
    });
  });

  test('should handle error', async () => {
    global.fetch.mockReturnValueOnce(
      Promise.resolve({ ok: 0, json: () => Promise.resolve('Opss') }),
    );
    const { getByTestId } = renderWithContext(<DrinksPage />);

    await waitForDomChange();

    expect(getByTestId('error-drinks-page')).toHaveTextContent('Something Went Wrong');
  });
});
