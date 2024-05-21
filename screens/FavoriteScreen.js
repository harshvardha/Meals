import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { FavoritesContext } from "../store/context/FavoritesContext";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = () => {
    const { favoriteMealIds } = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>
                    You have no favorite meals yet.
                </Text>
            </View>
        )
    }

    return (
        <MealsList items={favoriteMeals} />
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default FavoriteScreen;