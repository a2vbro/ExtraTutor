
import React from 'react';
import { SCREENS, RootNavigation } from './services';
import {SafeAreaProvider} from 'react-native-safe-area-context';


function App(): React.JSX.Element {


  return (
    <SafeAreaProvider>
      <RootNavigation initialRouteName={SCREENS.CONNECT_WALLET} />
    </SafeAreaProvider>
  );
}

export default App;
