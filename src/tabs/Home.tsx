import {View, Text, Image} from 'react-native';
import React from 'react';
import DashboardStats from '../components/DashboardStats';
import ProjectCategories from '../components/ProjectCategories';
import TaskInfo from '../components/TaskInfo';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'gray',
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 10,
        }}>
        <Image
          source={require('../images/enlogo.jpg')}
          style={{height: 50, width: 50, resizeMode: 'contain'}}
        />
        <Text style={{color: 'black'}}>Good Morning, John!</Text>
        <Icon name="notifications-outline" size={30} color={'black'} />
      </View>
      <DashboardStats />
      <ProjectCategories />
      <TaskInfo />
    </View>
  );
};

export default Home;
