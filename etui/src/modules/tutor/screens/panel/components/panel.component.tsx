import React, { FC } from 'react';
import {Text, View} from 'react-native';

import { TPanelProps } from '../types';
import { styles } from './styles';
import {Header} from '../../../../../components/Header';
import {TopMenu} from '../../../../../components/TopMenu';
import {SCREENS} from '../../../../../services';

export const PanelComponent: FC<TPanelProps> = () => {
  return (
    <View style={styles.container}>
      <Header title={'Tutor panel'} />
      <TopMenu items={[{title: 'Wallet', url: SCREENS.CONNECT_WALLET}]} />
      <View>
        <Text style={styles.title}>Tutor main panel content</Text>
      </View>
    </View>
  );
};
