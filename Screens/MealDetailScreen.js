import React,{useCallback,useEffect} from 'react';
import {View,Text,StyleSheet,Button,Image,ScrollView} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";


import {MEALS} from "../Data/dummy-data";
import HeaderNewButton from "../Component/HeaderButton";
import DefaultText from "../Component/DefaultText";
import DetailsComp from "../Component/DetailsComp";
import {useDispatch,useSelector} from "react-redux";
import {togglefavorite} from "../Store/Actions/mealsActions";

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const availableMeals = useSelector(state => state.mealsReducer.meals);
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    const availableMealsFavorites = useSelector(state => state.mealsReducer.favorites);
    const isFav = availableMealsFavorites.some(item => item.id ===  mealId);

    const dispatch = useDispatch();

    const handlerChange= useCallback( ()=> {
        dispatch(togglefavorite(mealId));
    },[dispatch, mealId])

    useEffect(()=>{
        props.navigation.setParams({handler : handlerChange})
    }, [handlerChange])

    useEffect(()=>{
        props.navigation.setParams({isFav : isFav})
    }, [isFav])

    return(
        <ScrollView>
            <View style={styles.screen}>
                <Image source={{uri : selectedMeal.imageUrl}} style={styles.image} />
                <View style={styles.details}>
                    <DefaultText>{selectedMeal.duration}</DefaultText>
                    <DefaultText>{selectedMeal.complexity}</DefaultText>
                    <DefaultText>{selectedMeal.affordability}</DefaultText>
                </View>
                <Text style={styles.title}>ingredients</Text>
                <DetailsComp newTab={selectedMeal.ingredients} />
                <Text style={styles.title}> steps</Text>
                <DetailsComp newTab={selectedMeal.steps} />

            </View>
        </ScrollView>

    )
};

MealDetailScreen.navigationOptions = (nav) => {
    const mealTitle = nav.navigation.getParam('mealTitle');
    const toggleFavorite = nav.navigation.getParam('handler');
    const isFav = nav.navigation.getParam('isFav');

    return {
        headerTitle : mealTitle,
        headerRight : () =>
            <HeaderButtons HeaderButtonComponent={HeaderNewButton} >
                <Item
                    title='Favorite'
                    iconName={(isFav) ?'ios-star':'ios-star-outline'}
                    onPress={toggleFavorite}
                />
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    image : {
        width : '100%',
        height : 200
    },
    details : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        padding : 10,
    },
    title : {
        fontFamily : 'open-sans-bold',
        fontSize : 14,
        textAlign : 'center',
        marginVertical : 15
    }

})

export default MealDetailScreen;