import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 20}}>SettingScreen</Text>
      <Button
        title="Go To LoginScreen"
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
      />
    </View>
  );
};

export default SettingScreen;
