import React from 'react';
import {Text,View} from 'react-native';

export default function sub (exponent) {
    return (
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 10, lineHeight: 18,color:'#2196f3'}}>{exponent}</Text>
        </View>)
}
 