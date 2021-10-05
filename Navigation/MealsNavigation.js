import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';
import {Platform} from "react-native";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Ionicons} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import {createDrawerNavigator} from "react-navigation-drawer";

import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMealScreen from "../Screens/CategoryMealScreen";
import MealDetailScreen from "../Screens/MealDetailScreen";
import FavoriteScreen from "../Screens/FavoriteScreen";
import FilterScreen from "../Screens/FilterScreen";
import Colors from "../constats/Colors";

const NavigationApp = createStackNavigator({
    categories : CategoriesScreen,
    CategoryMeal : CategoryMealScreen,
    MealDetail : MealDetailScreen
},{
    defaultNavigationOptions: {
        headerStyle : {
            backgroundColor : Colors.primary,
        },
        headerTintColor: 'white',
    }
})

const FavoriteScreenMeals = createStackNavigator({
    Favorities : FavoriteScreen,
    MealDetail : MealDetailScreen
},{
    defaultNavigationOptions: {
        headerStyle : {
            backgroundColor : Colors.primary,
        },
        headerTintColor: 'white',
        headerTitle : 'A Screen'

    }
})




const help = {
    Meals : {screen : NavigationApp, navigationOptions : {
            tabBarIcon : (info) => {
                return(
                    <Ionicons
                        name='ios-restaurant'
                        size={25}
                        color={info.tintColor}
                    />
                )
            },
            tabBarColor: Colors.primary,

        }},
    Favorites : {screen :FavoriteScreenMeals, navigationOptions : {
            tabBarIcon : (info) => {
                return(
                    <Ionicons
                        name='ios-star'
                        size={25}
                        color={info.tintColor}
                    />
                )
            },
            tabBarColor: Colors.secondary

        }}

};

const bottomNavigation = Platform.OS === 'android'?
    createMaterialBottomTabNavigator(help,{
        shifting : true
    })

    : createBottomTabNavigator (help
    ,{tabBarOptions: {
    activeTintColor : Colors.secondary,
    }})

const NavBareFilter = createStackNavigator({
    MealDetail : FilterScreen
},{    defaultNavigationOptions: {
        headerStyle : {
            backgroundColor : Colors.primary,
        },
        headerTintColor: 'white',
        headerTitle : 'A Screen'
    }} );
const Drawer = createDrawerNavigator({
    Meals : bottomNavigation,
    Filters : NavBareFilter
}, {
    contentOptions : {
        activeTintColor : Colors.secondary,
        itemsContainerStyle : {
          marginTop: 20
        }
    }
});



export default createAppContainer(Drawer);