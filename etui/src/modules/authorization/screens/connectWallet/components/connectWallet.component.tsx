import React, { FC } from 'react';
import { Text, View} from 'react-native';
import { Button } from '@rneui/themed';

import {TConnectWalletComponentProps} from '../types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { ParamList, SCREENS } from '../../../../../services';
import { styles } from './styles';

export const ConnectWalletComponent: FC<TConnectWalletComponentProps> = () => {

  const navigation = useNavigation<NavigationProp<ParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}> <Text style={styles.title}>Please connect your wallet</Text></View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => navigation.navigate(SCREENS.TUTOR_PANEL)}  title={'Connect'}/>
      </View>
    </View>
  );
};
