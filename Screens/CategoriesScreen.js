import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import {CATEGORIES} from "../Data/dummy-data"
import Category from "../Component/Category"
import HeaderNewButton from "../Component/HeaderButton";


const CategoriesScreen = props => {

    const renderItems = (item) => {
        return (
            <Category
                color={item.item.color}
                title={item.item.title}
                onSelect={() => {
                    props.navigation.navigate({
                    routeName : 'CategoryMeal',
                    params : {catId : item.item.id}
            })}} />
        )
    }


    return(
        <FlatList
            keyExtractor={ ( item , index ) => ( item.id ) }
            numColumns={ 2 }
            data={ CATEGORIES }
            renderItem={ renderItems }
        />
    );
}

CategoriesScreen.navigationOptions = (nav) => {
    return {
        headerTitle : 'Meal Categories',
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

const styles = StyleSheet.create({})

export default CategoriesScreen;