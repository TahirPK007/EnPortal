import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
      behavior={'padding'}
      // behavior={Platform.OS === 'android' ? 'padding' : 'height'}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 50, marginTop: 150}}>
          {'</>'}
        </Text>
        <TextInput
          style={[styles.txtinput, {marginTop: 50}]}
          placeholder="Email"
          placeholderTextColor={'black'}
        />
        <TextInput
          style={[styles.txtinput, {marginTop: 15}]}
          placeholder="Password"
          placeholderTextColor={'black'}
        />
        <TouchableOpacity
          style={styles.lginBtn}
          onPress={() => {
            navigation.navigate('HomeTabs');
          }}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  lginBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%',
    backgroundColor: 'black',
    height: 60,
    marginTop: '30%',
    borderRadius: 30,
  },
  txtinput: {
    width: '90%',
    height: 65,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    paddingLeft: 20,
    color: 'black',
  },
});
