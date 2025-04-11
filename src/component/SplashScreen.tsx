import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {ThemeProps} from '../../../styles/Colour';
import {changeTheme} from '../../../redux/slice/ThemeSlice';
import {loginStateUpdate} from '../../../redux/slice/UserSlice';
import {homeScreenHeaderStyles} from '../../../screens/home/styles/HomeHeader';
import {RootState} from '../type/commonType';

const SplashScreen = () => {
  const {AppColour} = useSelector((state: RootState) => state.theme);

  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const getUserData = async () => {
    try {
      const TOKEN = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');

      const themeModeFromStorage = await AsyncStorage.getItem('themeMode');
      if (themeModeFromStorage) {
        dispatch(changeTheme({theme: themeModeFromStorage}));
      }

      if (TOKEN && userId) {
        const payload = {
          user_id: userId,
          user_token: TOKEN,
        };
        dispatch(loginStateUpdate(payload));
        navigation.navigate('app');
      } else {
        navigation.navigate('login');
      }
    } catch (error) {
      navigation.navigate('login');
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getUserData();
    }, 1000);
  }, []);

  return (
    <View style={styles(AppColour).container}>
      <Text style={homeScreenHeaderStyles(AppColour).title}>To Do</Text>
    </View>
  );
};

export default SplashScreen;

const styles = (AppColour: ThemeProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: AppColour.background,
    },
  });
