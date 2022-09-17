import React from 'react'
import { LinearGradient } from "expo-linear-gradient";

import { Image, Text, View } from 'react-native'
import { theme } from '../../global/styles/theme'
import { styles } from './styles';



export function GuildIcon () {
    const { secondary80, secondary100 } = theme.colors
    const uri = 'https://cdn.icon-icons.com/icons2/2108/PNG/512/discord_icon_130958.png'
    return (

            <Image
            source={{uri }}
            style ={styles.image}
            resizeMode= 'cover'
            />

    )
}