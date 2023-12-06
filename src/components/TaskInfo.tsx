import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const TaskInfo = () => {
  const taskDetails = [
    {
      title: 'EN Portal App Design',
      description: 'Contrary to popular belief, Lorem Ipsum is not simpl',
      startDate: '23rd November 2023',
      dueDate: '25th November 2023',
      category: 'EN',
    },
    {
      title: 'EN Portal App Design',
      description: 'Contrary to popular belief, Lorem Ipsum is not simpl',
      startDate: '23rd November 2023',
      dueDate: '25th November 2023',
      category: 'EN',
    },
    {
      title: 'EN Portal App Design',
      description: 'Contrary to popular belief, Lorem Ipsum is not simpl',
      startDate: '23rd November 2023',
      dueDate: '25th November 2023',
      category: 'EN',
    },
    {
      title: 'EN Portal App Design',
      description: 'Contrary to popular belief, Lorem Ipsum is not simpl',
      startDate: '23rd November 2023',
      dueDate: '25th November 2023',
      category: 'EN',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: 25,
          paddingRight: 25,
          marginTop: 15,
        }}>
        <Text style={{color: 'black', fontSize: 25, fontWeight: '500'}}>
          Tasks
        </Text>
        <Icon name="bars" size={35} color={'black'} />
      </View>
      <View
        style={{
          width: '100%',
          paddingLeft: 25,
          paddingRight: 25,
          marginTop: 10,
        }}>
        <FlatList
          data={taskDetails}
          scrollEnabled={true}
          contentContainerStyle={{paddingBottom: 50}}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  backgroundColor: '#f8f8f8',
                  height: 'auto',
                  borderRadius: 15,
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                  }}>
                  <Text
                    style={{color: 'black', fontSize: 17, fontWeight: '600'}}>
                    {item.title}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: 'white',
                        marginRight: 10,
                        backgroundColor: 'skyblue',
                        borderRadius: 15,
                        width: 50,
                        height: 30,
                        textAlign: 'center',
                        paddingTop: 5,
                      }}>
                      New
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        marginRight: 10,
                        backgroundColor: 'lightgray',
                        borderRadius: 15,
                        width: 50,
                        height: 30,
                        textAlign: 'center',
                        paddingTop: 5,
                      }}>
                      {item.category}
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: 'black',
                    width: '70%',
                    marginLeft: 10,
                    marginTop: 5,
                  }}>
                  {item.description}
                </Text>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                  <Text
                    style={{color: 'black', marginLeft: 10, fontWeight: '500'}}>
                    Start Date:
                  </Text>
                  <Text style={{color: 'black'}}>{item.startDate}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{color: 'black', marginLeft: 10, fontWeight: '500'}}>
                    Start Date:
                  </Text>
                  <Text style={{color: 'black'}}>{item.startDate}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default TaskInfo;
