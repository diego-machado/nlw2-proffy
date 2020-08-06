import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';
import PageHeader from '../../components/PageHeader';

function TeacherList() {
  const { goBack } = useNavigation();

  function handlenavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
    </View>
  )
}

export default TeacherList;
