import React, { FC } from 'react';
import {Text, View} from 'react-native';

import { TPanelProps } from '../types';
import { styles } from './styles';

export const PanelComponent: FC<TPanelProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tutor main panel</Text>
    </View>
  );
};
