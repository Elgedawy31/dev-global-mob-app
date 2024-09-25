import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import HeadText from '../HeadText';
import { Colors } from '@/constants/Colors';
const HomeHeader = ({title , onPress}:{title:string , onPress:()=>void}) => {
    const colorScheme = useColorScheme() ?? "light";
  return (
    <View style={[ {justifyContent:'space-between' , flexDirection:'row', alignItems:'center' }]}>
    <HeadText title={title} />
    <TouchableOpacity onPress={onPress} >
    <FontAwesome6 name="add" size={24} color={Colors[colorScheme].text_1} />
    </TouchableOpacity>
    </View>
  )
}

export default HomeHeader