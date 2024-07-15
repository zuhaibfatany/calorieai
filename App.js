import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

// Import screen components
import HomeScreen from './screens/HomeScreen.js';
import LogInScreen from './screens/LogInScreen.js';
import SignUpScreen from './screens/SignUpScreen.js';
import CameraScreen from './screens/CameraScreen.js';
import MyCaloriesScreen from './screens/MyCaloriesScreen.js';
import VoiceScreen from './screens/VoiceScreen.js';

// Icons
import IconHeart from './assets/icons/MyCalories.png';
import IconVoice from './assets/icons/voiceicon.png';
import IconCamera from './assets/icons/Camera.png';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Camera') {
            iconName = IconCamera;
          } else if (route.name === 'MyCalories') {
            iconName = IconHeart;
          } else if (route.name === 'Voice') {
            iconName = IconVoice;
          }
          // Adjust the size of the icons here, you can use custom sizes if you want
          return <Image source={iconName} style={{ width: 42, height: 31 }} resizeMode="contain" />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false
      })}
      initialRouteName="Camera" // Set the initial route
    >
      <Tab.Screen name="MyCalories" component={MyCaloriesScreen} />
      <Tab.Screen name="Voice" component={VoiceScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
    </Tab.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
