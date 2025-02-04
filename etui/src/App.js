import React from 'react';
import {RootNavigation, SCREENS} from '../services';

export default function App() {

    return (
      <RootNavigation initialRouteName={SCREENS.CONNECT_WALLET} />
    );
}
