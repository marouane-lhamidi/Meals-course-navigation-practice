import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import DetailsMeal from "./DetailsMeal";

import {useSelector} from "react-redux";

const Meals = props => {
    const availableMeals = useSelector(state => state.mealsReducer.favorites);
    const renderMealItem = itemData => {
        const isFav = availableMeals.some(item => item.id ===  itemData.item.id);
        return (

            <DetailsMeal
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectedMeal = {()=>{
                    props.navigation.navigate({
                        routeName : 'MealDetail',
                        params : {
                            mealId : itemData.item.id,
                            mealTitle : itemData.item.title,
                            isFav : isFav
                        }
                    })
                }}

            />
        );
    };


    return(
        <View style={styles.screen}>
            <FlatList
                data={props.displayedMeals}
                keyExtractor={ ( item , index ) => ( item.id ) }
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 20
    }
})

export default Meals;