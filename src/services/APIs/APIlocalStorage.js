export const takeFavStorage = () => JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

export const sendToFavoriteStorage = ({
  id,
  type,
  area = '',
  category,
  alcoholicOrNot,
  name,
  image,
  doneDate,
}) => {
  const thisFood = { id, type, area, category, alcoholicOrNot, name, image, doneDate };
  const favoriteList = takeFavStorage();
  localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteList, thisFood]));
};

export const rmFromFavoriteStorage = (id) => {
  const favorite = takeFavStorage();
  const oficialFavoriteList = favorite.filter((fav) => fav.id !== id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(oficialFavoriteList));
};