
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton , RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';

export type GuildProps={

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
    return (
        <RectButton {...rest} >

                <View style ={styles.container}>

                </View>

        </RectButton>
    )
}