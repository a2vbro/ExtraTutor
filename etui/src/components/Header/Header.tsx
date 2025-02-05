import React, { FC, useCallback } from 'react';
import { Pressable, Text, View, ViewStyle } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';


interface Props {
  title: string;
  onPressLeftButton?: () => void;
  isLeftButton?: boolean;
  containerStyle?: ViewStyle;
  backButtonStyle?: ViewStyle;
}

export const Header: FC<Props> = ({
  title,
  onPressLeftButton,
  isLeftButton = true,
  containerStyle = {},
  backButtonStyle = {},
}) => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    if (typeof onPressLeftButton === 'function') {
      return onPressLeftButton();
    }

    navigation.goBack();
  }, [navigation, onPressLeftButton]);

  const containerStyles = [styles.container, containerStyle];
  const backButtonStyles = [styles.backButton, backButtonStyle];

  return (
    <View style={containerStyles}>
      <Text style={styles.label}>{title}</Text>
      {isLeftButton ? (
        <Pressable onPress={goBack} style={backButtonStyles}>
           <Text>Back</Text>
        </Pressable>
      ) : null}
    </View>
  );
};
