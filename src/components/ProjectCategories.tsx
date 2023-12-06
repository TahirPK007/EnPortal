import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';

const ProjectCategories = () => {
  const [categories, setcategories] = useState([
    'All',
    'EN',
    'xPAL',
    'Locktill',
  ]);
  const [activeCategory, setactiveCategory] = useState(0);
  return (
    <View style={{}}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 25,
          paddingRight: 25,
          alignItems: 'center',
          marginTop: 15,
        }}>
        <Text style={{color: 'black', fontSize: 25, fontWeight: '500'}}>
          Projects
        </Text>
        <TouchableOpacity>
          <Text style={{color: 'black', fontSize: 20}}>{'View All >'}</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          paddingLeft: 25,
          paddingRight: 25,
          marginTop: 10,
        }}>
        <FlatList
          data={categories}
          horizontal={true}
          renderItem={({item, index}) => {
            return (
              <View style={{}}>
                <TouchableOpacity
                  style={{
                    width: 80,
                    height: 40,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5,
                    borderRadius: 15,
                    backgroundColor:
                      index === activeCategory ? 'black' : 'white',
                  }}
                  onPress={() => {
                    setactiveCategory(index);
                  }}>
                  <Text
                    style={{
                      color: index === activeCategory ? 'white' : 'black',
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ProjectCategories;
