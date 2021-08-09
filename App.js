import React, {Component} from 'react';
import {
  Alert,
  BackHandler,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
  Button,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';


import Home from './components/page/Home';
import News from './components/page/News';

const Stack = createStackNavigator();
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="News" component={News} />
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
