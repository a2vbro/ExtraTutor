import React, {FC} from 'react';
import { View } from 'react-native';


import { styles } from './styles';
import {TopMenu} from '../TopMenu';
import {SCREENS} from '../../services';
import {Header} from '../Header';

interface TutorLayoutProps {
  children: React.ReactNode;
}

export const TutorLayout: FC<TutorLayoutProps> = ({
                                         children }) => {

  const tutorMenuItems = [
    {title: 'Main', url: SCREENS.TUTOR_PANEL},
    {title: 'Students', url: SCREENS.TUTOR_STUDENTS},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header title={'Tutor panel'} />
      </View>
     <View style={styles.menuContainer}>
       <TopMenu items={tutorMenuItems} />
     </View>
      <View style={styles.contentContainer}>
        {children}
      </View>
    </View>
  );
};
