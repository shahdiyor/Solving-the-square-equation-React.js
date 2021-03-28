import React from 'react';
import { StyleSheet,Text,View} from 'react-native';
import sub from '../src/ToSub';


export default function Output(props) {
    return(
            <View style ={styles.view}>
                <Text style = {styles.text}>Вы ввели:</Text>
                <Text style = {{fontSize:15, color:'#2196f3'}}>{props.A}x  {(() => sub('2'))()}+ {props.B}x + {props.C}=0</Text>
                <Text style = {styles.text}>Ответ:</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    view:{
        marginTop:10,
        marginLeft: 15
    },
    text:{
        color: '#2196f3',
        fontWeight: 'bold',
        fontSize: 20
    }
});