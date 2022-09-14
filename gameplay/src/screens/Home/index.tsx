import React, { useState } from 'react'
import { View } from 'react-native'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelected } from '../../components/CategorySelected'
import { Profile } from '../../components/Profile'
import { styles } from './style'

export function Home() {
    const [category,setCategory] = useState('');

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
            </View>
        </View>
    )
}