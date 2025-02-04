
import React from 'react';
import { SCREENS, RootNavigation } from './services';


function App(): React.JSX.Element {


  return (
      <RootNavigation initialRouteName={SCREENS.CONNECT_WALLET} />
  );
}

export default App;
