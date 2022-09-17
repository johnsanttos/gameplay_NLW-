
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton , RectButtonProps } from 'react-native-gesture-handler';
import { categories } from '../../utils/categories';
import { GuildIcon } from '../GuildIcon';
import { styles } from './styles';

export type GuildProps={
name: string
}
export type AppointmentsProps={
    id: string;
    guild: GuildProps;
    category:string;
    date: string;
    description: string
}
type Props = RectButtonProps & {
    data: AppointmentsProps
}

export function Appointments({data, ...rest}:Props) {
    const [category] =categories.filter(item =>item.id===data.category)
    return (
        <RectButton {...rest} >

                <View style ={styles.container}>
            <GuildIcon/>
            <View style ={styles.content}>
                <View style ={styles.header}>
                    <Text style ={styles.title}>
                    {data.guild.name}
                    </Text>

                    <Text style ={styles.category} >
                    {category.title}
                    </Text>
                </View>
            </View>
                </View>
                <View style = {styles.playersInfo}>

                </View>

        </RectButton>
    )
}