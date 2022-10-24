import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { ListDivider } from '../../components/ListDivider';
import { Guild, GuildProps } from '../../components/Guild';

type Props ={
    handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({handleGuildSelect}: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Mitósos',
            icon: null,
            owner: false
        },
        {
            id: '3',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '4',
            name: 'Mitósos',
            icon: null,
            owner: false
        },
        {
            id: '5',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '6',
            name: 'Mitósos',
            icon: null,
            owner: false
        },
        {
            id: '7',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '8',
            name: 'Mitósos',
            icon: null,
            owner: false
        },
        
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress = { () => handleGuildSelect(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle ={{paddingBottom: 69 , paddingTop: 103}}
                ListHeaderComponent= {() => <ListDivider isCentred />}
                ItemSeparatorComponent={() => <ListDivider isCentred />}
                style={styles.guilds}
            />
        </View>
    )
}

