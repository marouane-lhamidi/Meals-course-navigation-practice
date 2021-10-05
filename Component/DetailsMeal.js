import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity, ImageBackground} from 'react-native';
import DefaultText from "./DefaultText";

const DetailsMeal = props => {
    return(
        <View style={styles.screen}>
            <TouchableOpacity style={{width : '100%'}} onPress={props.onSelectedMeal}>
                <View style={styles.mealsCard}>
                    <View style={styles.contentTitle}>
                        <ImageBackground source={{uri : props.image}} style={styles.bgImage} >
                            <View style={{...props.title, ...styles.default}}>
                                <Text style={styles.titleText}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>

                    <View style={styles.contentContent}>
                        <View style={{...styles.content, ...styles.default}}>
                            <DefaultText>{props.duration}</DefaultText>
                            <DefaultText>{props.complexity}</DefaultText>
                            <DefaultText>{props.affordability}</DefaultText>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        marginBottom : 10,
    },
    mealsCard : {
        flex: 1,
        backgroundColor : '#ccc',
        height : 150,
        width : '100%',
        borderRadius : 10,
        overflow: 'hidden',

    },
    default : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center'
    },
    contentTitle : {
        height : '85%',

    },
    contentContent : {
        height: '15%'
    },
    content : {
        height : '100%',
        width : '100%'
    },
    title : {
        height : '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    titleText : {
        width : '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color : 'white',
        fontSize : 20,
        fontFamily : 'open-sans-bold',
        textAlign : 'center',
        height : 32,
        padding : 1
    },
    bgImage : {
        height : '100%',
        width: '100%',
        justifyContent : 'flex-end',

    }
})

export default DetailsMeal;