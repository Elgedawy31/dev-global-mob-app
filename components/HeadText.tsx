import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

const HeadText = ({title}:{title:string}) => {
    const colorScheme = useColorScheme() ?? "light";
    const styles = StyleSheet.create({
        text:{
            fontSize: 20,
            fontWeight:'500',
            color:Colors[colorScheme].text_1 ,
        }
    })
  return <Text style={styles.text}>{title}</Text>
}

export default HeadText