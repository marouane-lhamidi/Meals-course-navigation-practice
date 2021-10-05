import React from 'react';
import Meals from "../Component/Meals";
import {useSelector} from "react-redux";
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderNewButton from "../Component/HeaderButton";
import {StyleSheet,Text,View} from "react-native";


const FavoriteScreen = props => {
    const availableMeals = useSelector(state => state.mealsReducer.favorites)

    if (availableMeals.length === 0 || !availableMeals){
        return (
            <View style={styles.screen}>
                <Text>No favorites meals found. Start adding some!</Text>
            </View>
        )
    }

    return(
        <Meals  displayedMeals={availableMeals}   navigation={props.navigation}/>
    )
};


FavoriteScreen.navigationOptions = (nav) => {

    return {
        headerTitle : 'Your Favorite',
        headerLeft :  ( ) =>
            <HeaderButtons HeaderButtonComponent={HeaderNewButton} >
                <Item
                    title='Menu'
                    iconName='ios-menu'
                    onPress={() =>{
                        nav.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>

    }
}

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})


export default FavoriteScreen;