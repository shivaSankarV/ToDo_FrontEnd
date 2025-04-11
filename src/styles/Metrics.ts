import {
  heightPercentageToDP as hp2dp,
  widthPercentageToDP as wp2dp,
} from 'react-native-responsive-screen';

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 800;
const hS = (size: number): number =>
  wp2dp((size / guidelineBaseWidth) * 100 + '%');
const vS = (size: number): number =>
  hp2dp((size / guidelineBaseHeight) * 100 + '%');

export {hS, vS};
