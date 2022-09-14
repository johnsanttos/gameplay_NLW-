import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { theme } from '../../global/styles/theme';
import { categories } from '../../utils/categories';
import { styles } from './styles';

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked: boolean
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    ...rest
}: Props) {

    const { secondary80, secondary100 } = theme.colors
    return (
        <RectButton
        {...rest}
        >
         <LinearGradient
            style={styles.container}
            colors={[secondary80, secondary100 ]}>
                <View style={[styles.content, {opacity: checked? 1: 0.4}]} >
                    
                <View style ={checked? styles.checked: styles.check}/>

                <Icon
                width={48}
                height={48}
                />
                <Text style={styles.title}> {title} </Text>
                </View>
            

        </LinearGradient>

        </RectButton>
    )
}