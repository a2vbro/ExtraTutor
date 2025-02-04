import React, { FC } from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Panel } from '../../app/modules/tutor/screens/panel';

import { ConnectWallet } from '../../app/modules/authorization/screens/connectWallet';
import { SCREENS } from './constants';
import {ParamList, TRootNavigationProps} from './types';

const Stack = createNativeStackNavigator();


export const RootNavigation: FC<TRootNavigationProps> = ({ initialRouteName }) => {

  return (
    <NavigationContainer<ParamList>>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
          ...Platform.select({
            android: {
              statusBarTranslucent: true,
              statusBarStyle: 'dark',
            },
          }),
        }}
      >
        <Stack.Screen name={SCREENS.CONNECT_WALLET} component={ConnectWallet} />
        <Stack.Screen name={SCREENS.TUTOR_PANEL} component={Panel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
