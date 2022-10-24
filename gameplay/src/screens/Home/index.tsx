import React, { useState } from 'react'
import { View ,Text, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Appointments } from '../../components/Appointments'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelected } from '../../components/CategorySelected'
import { ListHeader } from '../../components/ListHeader'
import { Profile } from '../../components/Profile'
import {ListDivider} from '../../components/ListDivider'
import { styles } from './style'
import { Background } from '../../components/Background';


export function Home() {
    const [category,setCategory] = useState('');

    const navigation = useNavigation();

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
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da Midware'
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '2',
            date:'14/09 ás 15:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da Midware'
        },
        {
            id: '3',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date:'14/09 ás 15:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da Midware'
        },

    ]

function handleCategorySelected(categoryId:string) {

     categoryId === category ? setCategory ('')  : setCategory(categoryId)
}  


function handleAppointmentDetails(){
navigation.navigate('AppointmentDetails')
}

function handleAppointmentCreate (){
    navigation.navigate('AppointmentCreate')
    }
 return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd
                onPress={handleAppointmentCreate}
                />
            </View>
            
            <View>
                <CategorySelected 
                categorySelected={category}
                setCategory= {handleCategorySelected} 
                hasCheckBox = {true}       
                />

                  
                    <ListHeader
                    title='Partidas agendadas'
                    subtitle='Total 6'
                    />

                 

                </View>
                { <FlatList
                    data={appointments}
                    keyExtractor ={item => item.id}
                    renderItem ={({item}) => (
                        <Appointments 
                        data={item}
                        onPress={handleAppointmentDetails}
                        />
                    )}
                    ItemSeparatorComponent={() => <ListDivider/> }
                    contentContainerStyle ={{paddingBottom: 69}}
                    style ={styles.matches}
                    showsVerticalScrollIndicator ={false}
                    /> }
           
        </Background>
    )
}