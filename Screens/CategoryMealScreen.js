import React from 'react';
import {useSelector} from "react-redux";

import {CATEGORIES} from "../Data/dummy-data";
import Meals from "../Component/Meals";
import {StyleSheet,Text,View} from "react-native";

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('catId');
    const availableMeals = useSelector(state => state.mealsReducer.filterMeals);

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );
    if (displayedMeals.length === 0 || !displayedMeals){
        return (
            <View style={styles.screen}>
                <Text>No favorites meals found. Start adding some!</Text>
            </View>
        )
    }
    return (
        <Meals displayedMeals={displayedMeals}   navigation={props.navigation}/>
    )
};

CategoryMealScreen.navigationOptions =  (nav) => {
    const CatId = nav.navigation.getParam('catId');
    const selectCat = CATEGORIES.find(item => item.id === CatId);

    return ({
        headerTitle : selectCat.title
    } )
}
const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})


export default CategoryMealScreen;