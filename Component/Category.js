import React from 'react';
import {View, Text, StyleSheet,  TouchableNativeFeedback} from 'react-native';
const Header = props => {
    return(
        <View style={styles.categorie} >
            <TouchableNativeFeedback
                style={styles.touch}
                onPress={props.onSelect}
            >
                <View style={{...styles.categories, ...{backgroundColor : props.color}}}>
                    <Text style={styles.text}>{props.title}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>

    )
};

const styles = StyleSheet.create({
    categorie : {
        flex : 1,
        margin : 15,
        height : 150,
    },
    categories : {
        flex: 1,
        borderRadius : 10,
        padding : 20,
        justifyContent : 'flex-end',
        alignItems : 'flex-end',
        elevation : 10,
    },
    text : {
        fontSize : 19,
        fontFamily : 'open-sans-bold',
        textAlign : 'right'
    }

})

export default Header;

