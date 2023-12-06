import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useRoute, useNavigation} from '@react-navigation/native';
const TaskDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 30,
          borderBottomWidth: 1,
          borderBottomColor: 'lightgray',
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="arrow-back" size={30} color={'black'} />
        </TouchableOpacity>

        <Text style={{color: 'black', fontSize: 18, fontWeight: '500'}}>
          Task Detail
        </Text>
        <Text style={{color: '#0190ff', fontSize: 18}}>Edit</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 20,
          marginTop: 10,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '600',
          }}>
          Project:
        </Text>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
          {route.params.data.category}
        </Text>
      </View>
      <Text
        style={{
          color: 'black',
          marginLeft: 20,
          fontSize: 20,
          fontWeight: '600',
          marginTop: 10,
        }}>
        {route.params.data.title}
      </Text>
      <Text
        style={{color: 'black', marginLeft: 20, fontSize: 15, width: '90%'}}>
        {route.params.data.description}
      </Text>
      <Text
        style={{
          width: '90%',
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'lightgray',
        }}></Text>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingLeft: 20,
          paddingRight: 40,
          marginTop: 15,
        }}>
        <View>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
            Start Date:
          </Text>
          <Text style={{color: 'black'}}>{route.params.data.startDate}</Text>
        </View>
        <View>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
            Due Date:
          </Text>
          <Text style={{color: 'black'}}>{route.params.data.dueDate}</Text>
        </View>
      </View>
      <Text
        style={{
          width: '90%',
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'lightgray',
        }}></Text>
      <View style={{paddingLeft: 20, marginTop: 10}}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
          Followers:
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={require('../images/night.jpg')}
              style={{height: 70, width: 70, borderRadius: 35}}
            />
            <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
              Alex
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Image
              source={require('../images/night.jpg')}
              style={{height: 70, width: 70, borderRadius: 35}}
            />
            <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
              Alex
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Image
              source={require('../images/night.jpg')}
              style={{height: 70, width: 70, borderRadius: 35}}
            />
            <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
              Alex
            </Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          width: '90%',
          alignSelf: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'lightgray',
        }}></Text>
      <Text
        style={{
          color: 'black',
          fontSize: 20,
          fontWeight: '600',
          marginLeft: 20,
          marginTop: 10,
        }}>
        Logs
      </Text>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 10,
          justifyContent: 'space-between',
        }}>
        <TextInput
          placeholder="Start Date"
          placeholderTextColor={'black'}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            backgroundColor: '#f8f8f8',
            width: '45%',
            height: 70,
            borderRadius: 15,
            paddingLeft: 10,
          }}
        />
        <TextInput
          placeholder="Actual Hours"
          placeholderTextColor={'black'}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            backgroundColor: 'white',
            width: '45%',
            height: 70,
            borderRadius: 15,
            paddingLeft: 10,
          }}
        />
      </View>
      <TextInput
        placeholder="Description"
        placeholderTextColor={'gray'}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          backgroundColor: 'white',
          width: '90%',
          height: 70,
          borderRadius: 15,
          paddingLeft: 10,
          alignSelf: 'center',
          marginTop: 10,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          width: 150,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
          alignSelf: 'flex-end',
          marginRight: 20,
          borderRadius: 15,
        }}>
        <Text style={{color: 'white'}}>Save Log</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskDetails;
