import React, { FC } from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Panel } from '../../modules/tutor/screens/panel';

import { ConnectWallet } from '../../modules/authorization/screens/connectWallet';
import { SCREENS } from './constants';
import {ParamList, IRootNavigationProps} from './types';
import {Students} from '../../modules/tutor/screens/students';

const Stack = createNativeStackNavigator();


export const RootNavigation: FC<IRootNavigationProps> = ({ initialRouteName }) => {

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
        <Stack.Screen name={SCREENS.TUTOR_STUDENTS} component={Students} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
