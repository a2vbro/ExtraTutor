import React, { FC, useCallback } from 'react';
import { Pressable, Text, View } from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import { styles } from './styles';

interface MenuItem {
  title: string;
  url: string;
  onClick?: () => void;
}

interface Props {
  items: MenuItem[];
}

export const TopMenu: FC<Props> = ({
  items }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const itemClickHandler = useCallback((item: MenuItem) => {
    if (typeof item.onClick === 'function') {
      return item.onClick();
    }
      navigation.navigate(item.url, {});
  }, [navigation]);


  const containerStyles = [styles.container];

  return (
    <View style={containerStyles}>
      {items.map((item, index) => {
        return (<View key={index}>
          <Pressable onPress={() => itemClickHandler(item)} style={styles.item}>
            <Text style={[styles.label, route.name === item.url ? styles.activeItem : null]}>{item.title}</Text>
          </Pressable>
        </View>);
      })}
    </View>
  );
};
