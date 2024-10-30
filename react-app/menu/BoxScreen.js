import React from 'react'
import{ Text, StyleSheet} from 'react-native';

const BoxScreen = () => {

    return(

        <View style={{flex:1, flexDirection:'column' , justifyContent: 'space-between', alignItems: 'stretch'}}>
             <View style={{width:50 , height: 50 , backgroundColor:'powerblue'}}></View>
             <View style={{width:55 , height: 60 , backgroundColor:'skyblue'}}></View>
             <View style={{width:60 , height: 70 , backgroundColor:'steelblue'}}></View>
        </View>
       

    )
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'red',
        margin: 20
    }
});

export default BoxScreen;