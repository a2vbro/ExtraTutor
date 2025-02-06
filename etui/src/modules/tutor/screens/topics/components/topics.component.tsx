import React, { FC } from 'react';
import {Alert, FlatList, Text, View} from 'react-native';

import {TSTopicsComponentProps} from '../types';
import { styles } from './styles';
import { List } from 'react-native-paper';
import {Button} from '@rneui/themed';


export const TopicsComponent: FC<TSTopicsComponentProps> = ({data}) => {

  const inviteHandler = () => {
      Alert.alert('Topic was send to user');
  };

  const addHandler = () => {
    Alert.alert('Topic was added successfully.');
  };


  return (
      <View style={styles.container}>
        <Text style={styles.title}>Topics List</Text>
        <Button title={'Add New Topic'} onPress={addHandler} style={styles.button}/>
        <View style={styles.listContainer}>
          <FlatList data={data} renderItem={item => <View style={styles.itemContainer}><List.Item
            style={styles.item}
            key={item.item.id}
            title={item.item.title}
            description={item.item.knowledgeBase} /><Button title={'Send Topic'} onPress={inviteHandler}/></View>} />
         </View>
      </View>
  );
};
