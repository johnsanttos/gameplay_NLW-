import React, { useState } from 'react'
import { View ,Text, FlatList } from 'react-native'
import { Appointments } from '../../components/Appointments'

import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelected } from '../../components/CategorySelected'
import { ListHeader } from '../../components/ListHeader'
import { Profile } from '../../components/Profile'
import { styles } from './style'

export function Home() {
    const [category,setCategory] = useState('');

    const appointments =[
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date:'14/09 ás 15:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma parrtida da Midware'
        }
    ]

function handleCategorySelected(categoryId:string) {

     categoryId === category ? setCategory ('')  : setCategory(categoryId)
}   
 return (
        <View>

            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <View>

                <CategorySelected 
                categorySelected={category}
                setCategory= {handleCategorySelected}          
                />
                <View style={styles.content} >
                    
                    <ListHeader
                    title='Partidas agendadas'
                    subtitle='Total 6'
                    />

                    { <FlatList
                    data={appointments}
                    keyExtractor ={item => item.id}
                    renderItem ={({item}) => (
                        <Appointments data={item}/>
                    ) }
                    /> }

                </View>
            </View>
        </View>
    )
}