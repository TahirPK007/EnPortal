import {View, Text, Animated, StyleSheet, Easing} from 'react-native';
import React, {useEffect, useState} from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

const DashboardStats = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 25,
          paddingRight: 25,
          marginTop: 20,
        }}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
          Dashboard
        </Text>
        <Text style={{color: 'black', fontSize: 15}}>November-2023</Text>
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: 25,
          paddingLeft: 25,
        }}>
        <View
          style={{
            width: '50%',
            backgroundColor: 'black',
            height: 210,
            borderRadius: 25,
            margin: 5,
          }}>
          <Text
            style={{
              color: 'white',
              marginLeft: 20,
              marginTop: 20,
              fontSize: 10,
            }}>
            Total Tasks
          </Text>
          <Text
            style={{
              color: 'white',
              marginLeft: 20,
              fontSize: 50,
            }}>
            190
          </Text>
        </View>
        <View style={{width: '50%'}}>
          <View
            style={{
              backgroundColor: '#ffd500',
              width: '100%',
              height: 100,
              borderRadius: 20,
              margin: 5,
            }}>
            <Text
              style={{
                color: 'black',
                marginLeft: 10,
                marginTop: 10,
                fontSize: 10,
              }}>
              InProgress Tasks
            </Text>
            <Text style={{color: 'black', marginLeft: 10, fontSize: 30}}>
              50
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: '#f8f8f8',
              height: 100,
              borderRadius: 20,
              margin: 5,
              flexDirection: 'row',
            }}>
            <View>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 10,
                  fontSize: 10,
                  marginTop: 5,
                }}>
                Completed Tasks
              </Text>
              <Text style={{color: 'black', fontSize: 30, marginLeft: 10}}>
                140
              </Text>
            </View>
            <View style={{marginTop: 25, marginLeft: 10}}>
              <CircularProgress
                value={70}
                radius={30}
                activeStrokeColor="#399dea"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DashboardStats;

const styles = StyleSheet.create({});
