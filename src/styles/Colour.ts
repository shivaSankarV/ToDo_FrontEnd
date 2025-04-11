import {Platform, StyleSheet} from 'react-native';
import {hS, vS} from './Metrics';

const getThemeColors = (theme: string) => {
  switch (theme) {
    case 'dark':
      return {
        background: '#0f0f0e',
        backgroundHighlight: '#645d5d',
        primaryText: '#FFFFFF',
        secondaryText: '#e2ecf8',
        tertiaryText: '#9ea5ad',
        primary: '#4282FF',
        secondary: '#F47A47',
        tertiary: '#212734',
        grey: '#53545d',
        primaryIcon: '#ffffff',
        secondaryIcon: '#fc5959',
        pollbackground: '#4c4c4c',
        votedPollBackground: '#454545',
        votedPercentBar: '#4278ce',
        pollDot: '#4d77d7',
        link: 'skyblue',
      };
    case 'light':
    default:
      return {
        background: '#FFFFFF',
        backgroundHighlight: '#000000',
        primaryText: '#000000',
        secondaryText: '#2d3033',
        tertiaryText: '#6f757d',
        primary: '#4282FF',
        secondary: '#F47A47',
        tertiary: '#eceaea',
        grey: '#cecfe2',
        primaryIcon: '#000000',
        secondaryIcon: '#ff8080',
        pollbackground: '#e5ecec',
        votedPollBackground: '#e4e9e9',
        votedPercentBar: '#a4cbe3',
        pollDot: '#1f46a1',
        link: 'skyblue',
      };  
  }
};
export interface ThemeProps {
  background: string;
  backgroundHighlight: string;
  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
  primary: string;
  secondary: string;
  tertiary: string;
  grey: string;
  primaryIcon: string;
  secondaryIcon: string;
  pollbackground: string;
  votedPollBackground: string;
  votedPercentBar: string;
  pollDot: string;
  link: string;
}
export interface Theme {
  dark: ThemeProps;
  light: ThemeProps;
}

export const colorSet = {
  dark: {
    background: '#0f0f0e',
    backgroundHighlight: '#645d5d',
    primaryText: '#FFFFFF',
    secondaryText: '#e2ecf8',
    tertiaryText: '#9ea5ad',
    primary: '#4282FF',
    secondary: '#F47A47',
    tertiary: '#212734',
    grey: '#53545d',
    primaryIcon: '#ffffff',
    secondaryIcon: '#fc5959',
    pollbackground: '#4c4c4c',
    votedPollBackground: '#454545',
    votedPercentBar: '#4278ce',
    pollDot: '#4d77d7',
    link: 'skyblue',
  },
  light: {
    background: '#FFFFFF',
    backgroundHighlight: '#000000',
    primaryText: '#000000',
    secondaryText: '#2d3033',
    tertiaryText: '#6f757d',
    primary: '#4282FF',
    secondary: '#F47A47',
    tertiary: '#eceaea',
    grey: '#cecfe2',
    primaryIcon: '#000000',
    secondaryIcon: '#ff8080',
    pollbackground: '#e5ecec',
    votedPollBackground: '#e4e9e9',
    votedPercentBar: '#a4cbe3',
    pollDot: '#1f46a1',
    link: 'skyblue',
  },
};

export const AppColour = getThemeColors('dark');

export const Font = {
  300: 'Manrope-Light',
  400: 'Manrope-Regular',
  500: 'Manrope-Medium',
  600: 'Manrope-SemiBold',
  700: 'Manrope-Bold',
  800: 'Manrope-ExtraBold',
};

export const EventColour = {
  groupTitle: 'grey',
  eventText: '#000000',
  calenderCard: '#f0f4f8',
  border: '#f7f7f7',
  eventJoin: '#a3dca7',
  eventDecline: '#dfa8a8',
  pressed: '#625f5f42',
  time: '#717171',
  jobPlaces: '#a29c9c',
};

export const commonStyles = (AppColour: ThemeProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: AppColour.background,
      flex: 1,
    },
    modalContainer: {
      backgroundColor: AppColour.background,
      flex: 1,
      paddingTop: Platform.OS === 'ios' ? 45 : 0,
    },
    dot: {
      height: 2,
      width: 2,
      borderRadius: 1,
      marginHorizontal: hS(4),
      alignSelf: 'center',
      marginBottom: vS(2),
      backgroundColor: AppColour.grey,
    },
    errorMessage: {
      flex: 1,
      alignItems: 'center',
      paddingTop: vS(250),
    },
  });
