import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet, View, Image} from 'react-native';
import 'react-native-gesture-handler';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import DiscoveryScreen from './src/screens/DiscoveryScreen';
import PostScreen from './src/screens/PostScreen';
import NotificationScreen from './src/screens/NotificationsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

//Icons
import FIcon from 'react-native-vector-icons/Foundation';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import igLogo from './src/assets/images/ig.png';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{
          headerTitle: () => (
            <Image
              source={igLogo}
              style={{width: 100, height: 60}}
              resizeMode="cover"
            />
          ),
          headerRight: () => (
            <View style={{paddingRight: 10}}>
              <Ionicons name="paper-plane-outline" size={30} color="#000" />
            </View>
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              return <FIcon name="home" size={size} color={color} />;
            }
            if (route.name === 'Discovery') {
              return <FeatherIcon name="search" size={size} color={color} />;
            }
            if (route.name === 'Post') {
              return (
                <FeatherIcon name="plus-square" size={size} color={color} />
              );
            }
            if (route.name === 'Post') {
              return (
                <FeatherIcon name="plus-square" size={size} color={color} />
              );
            }
            if (route.name === 'Notifications') {
              return <AntDesign name="hearto" size={size} color={color} />;
            }
            if (route.name === 'Profile') {
              return (
                <Ionicons name="person-outline" size={size} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
