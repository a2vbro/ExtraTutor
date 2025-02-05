import React, { FC } from 'react';
import {Text, View} from 'react-native';

import { TStudentsProps } from '../types';
import { styles } from './styles';

export const StudentsComponent: FC<TStudentsProps> = () => {

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Students</Text>
      </View>
  );
};
