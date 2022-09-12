import React from 'react'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Inter_400Regular,Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium , Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { StatusBar} from 'react-native';
import { Home } from './src/screens/Home';

import { Background } from './src/components/Background';
import {SignIn} from './src/screens/SignIn';

export default function App() {
  const [fontLoaded] = useFonts ({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontLoaded){
return <AppLoading/>
  }

  return (
    <Background>
    <StatusBar
    barStyle='light-content'
    backgroundColor='transparent'
    translucent
/>
   <Home/>
   </Background>
  );
}
