import React, {useState, useCallback, useEffect} from 'react';
import {View,Text,StyleSheet,Switch} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import {useDispatch} from "react-redux";
import {togglefilter} from "../Store/Actions/mealsActions";

import HeaderNewButton from "../Component/HeaderButton";
import Colors from '../constats/Colors'

const OurSwitch = (props) =>{
    return (
    <View style={styles.filters}>
        <Text>{props.name}</Text>
        <Switch
            trackColor={{true : Colors.primary}}
            thumbColor={Colors.primary}
            value={props.value}
            onValueChange={props.onValueChange}
        />
    </View>)

}

const FilterScreen = props => {
    const [glutenFree, setGlutenFree] = useState(false)
    const [vegan, setVegan] = useState(false)
    const [vegetarian, setVegetarian] = useState(false)
    const [lactoseFree, setLactoseFree] = useState(false)

    const dispatch = useDispatch();

    const FilterChang =useCallback( () =>{
        const ourChanges  = {
            glutenFree,
            vegan,
            vegetarian,
            lactoseFree,
        };
        dispatch(togglefilter(ourChanges));
    }, [glutenFree, vegan, vegetarian, lactoseFree])


    useEffect(() =>{
        props.navigation.setParams({'save' : FilterChang})
    }, [FilterChang])


    return(

        <View style={styles.screen}>
            <Text style={styles.title}>The filters page</Text>
            <OurSwitch value={glutenFree}  name='glutenFree' onValueChange={val => setGlutenFree(val)} />
            <OurSwitch value={vegan}  name='vegan' onValueChange={val => setVegan(val)} />
            <OurSwitch value={vegetarian}  name='vegetarian' onValueChange={val => setVegetarian(val)} />
            <OurSwitch value={lactoseFree} name='lactoseFree' onValueChange={val => setLactoseFree(val)} />

        </View>
    )
};


FilterScreen.navigationOptions = (nav) => {
    return {
        headerTitle : 'Filter Screen',
        headerLeft :  ( ) =>
            <HeaderButtons HeaderButtonComponent={HeaderNewButton} >
                <Item
                    title='Menu'
                    iconName='ios-menu'
                    onPress={() =>{
                        nav.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>,
        headerRight : ( ) =>
            <HeaderButtons HeaderButtonComponent={HeaderNewButton} >
                <Item
                    title='save'
                    iconName='ios-save'
                    onPress={nav.navigation.getParam('save')}
                />
            </HeaderButtons>

    }
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        alignItems : 'center'
    },
    title : {
        fontFamily : 'open-sans-bold',
        fontSize : 20,
        textAlign : 'center',
        marginVertical : 20
    },
    filters : {
        flexDirection : 'row',
        width : '80%',
        justifyContent : 'space-between',
        marginVertical: 5

}
})

export default FilterScreen;