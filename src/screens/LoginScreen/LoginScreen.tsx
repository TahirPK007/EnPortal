import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

const LoginScreen = () => {
  let height = Dimensions.get('window').height;

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
        <Image
          source={require('../../images/enlogo.jpg')}
          style={{
            height: 80,
            width: 80,
            resizeMode: 'contain',
            marginTop: 100,
          }}
        />

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
