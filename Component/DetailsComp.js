import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailsComp = props => {

    return(
        <View>
        {props.newTab.map(tab =>
        <View key={tab} style={styles.tabContainer}>
            <Text style={styles.text}>{tab}</Text>
        </View>
        )}
        </View>
    )
};

const styles = StyleSheet.create({
    tabContainer : {
        marginHorizontal : 10,
        marginVertical : 5,
        borderWidth : 1,
        borderColor : '#ccc',
        padding : 5
    },
    text : {
        fontFamily : 'open-sans'
    }
})

export default DetailsComp;