import React, { FC } from 'react';
import {Alert, FlatList, Text, View} from 'react-native';

import { TStudentsComponentProps } from '../types';
import { styles } from './styles';
import { List } from 'react-native-paper';
import {Button} from '@rneui/themed';


export const StudentsComponent: FC<TStudentsComponentProps> = ({data}) => {

  const inviteHandler = () => {
      console.log('Student was invited');
      Alert.alert('Student was invited successfully.');
  };

  const addHandler = () => {
    console.log('User was added');
    Alert.alert('Student was added successfully.');
  };


  return (
      <View style={styles.container}>
        <Text style={styles.title}>Students List</Text>
        <Button title={'Add Student'} onPress={addHandler} style={styles.button}/>
        <View style={styles.listContainer}>
          <FlatList data={data} renderItem={item => <View style={styles.itemContainer}><List.Item
            style={styles.item}
            key={item.item.id}
            title={item.item.email}
            description={item.item.email} /><Button title={'Send Task'} onPress={inviteHandler}/></View>} />
         </View>
      </View>
  );
};
