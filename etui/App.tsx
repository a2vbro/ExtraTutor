
import React from 'react';
import { SCREENS, RootNavigation } from './src/services/';
import {SafeAreaProvider} from 'react-native-safe-area-context';


export default function App() {


  return (
    <SafeAreaProvider>
      <RootNavigation initialRouteName={SCREENS.CONNECT_WALLET} />
    </SafeAreaProvider>
  );
}
