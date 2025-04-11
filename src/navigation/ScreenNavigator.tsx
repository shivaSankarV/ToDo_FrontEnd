import React, {FC} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import HomeScreen from '../screens/home/screen/HomeScreen';
import ProfileScreen from '../screens/profile/screens/ProfileScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  AppStackNavParamList,
  BottomTabNavParamList,
  LoginStackNavParamList,
  RootStackNavParamList,
  RootState,
} from 'type/commonType';
import LoginScreen from '../screens/login/screen/LoginScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {vS} from '../styles/Metrics';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ScreenNavigator: FC = () => {
  const {AppColour, theme} = useSelector((state: RootState) => state.theme);

  const LoginStack = createNativeStackNavigator<LoginStackNavParamList>();
  const AppStack = createNativeStackNavigator<AppStackNavParamList>();
  const Tab = createBottomTabNavigator<BottomTabNavParamList>();
  const RootStack = createNativeStackNavigator<RootStackNavParamList>();

  // const LoginStackNav = () => {
  //   return (
  //     <LoginStack.Navigator screenOptions={{headerShown: false}}>
  //       <LoginStack.Screen name="loginScreen" component={LoginScreen} />
  //       <LoginStack.Screen
  //         name="forgotPassScreen"
  //         component={ForgotPassScreen}
  //       />
  //       <LoginStack.Screen
  //         name="otpChangePwdScreen"
  //         component={OtpChangePwdScreen}
  //       />
  //       <LoginStack.Screen name="otpVerifyScreen" component={OtpVerifyScreen} />
  //     </LoginStack.Navigator>
  //   );
  // };

  const AppStackNav = () => {
    return (
      <AppStack.Navigator
        screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
        <AppStack.Screen name="home" component={BottomTab} />
      </AppStack.Navigator>
    );
  };

  return (
    <View style={commonStyles(AppColour).modalContainer}>
      <SafeAreaProvider>
        <StatusBar
          translucent
          backgroundColor={AppColour.background}
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{headerShown: false, gestureEnabled: false}}>
            <RootStack.Screen name="splash" component={SplashScreen} />
            {/* <RootStack.Screen
              name="login"
              component={LoginStackNav}
              options={{animation: 'fade'}}
            /> */}
            <RootStack.Screen
              name="app"
              component={AppStackNav}
              options={{animation: 'fade'}}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
};

export default ScreenNavigator;

const styles = (AppColour: ThemeProps) =>
  StyleSheet.create({
    tabBarContainer: {},
    tabBarStyle: {
      backgroundColor: AppColour.background,
      paddingBottom: vS(5),
      paddingTop: vS(8),
    },
    tabBarIcon: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontWeight: '300',
      fontSize: vS(10),
      color: AppColour.primaryText,
      lineHeight: vS(16),
      alignSelf: 'center',
    },
  });
