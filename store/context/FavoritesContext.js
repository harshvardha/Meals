import { createContext, useState } from "react";

const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    const addFavorite = (id) => {
        setFavoriteMealIds(currentFavIds => [...currentFavIds, id]);
    }

    const removeFavorite = (id) => {
        setFavoriteMealIds(currentFavIds => currentFavIds.filter(mealId => mealId !== id));
    }

    return (
        <FavoritesContext.Provider
            value={{
                favoriteMealIds,
                addFavorite,
                removeFavorite
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesContext, FavoritesContextProvider };