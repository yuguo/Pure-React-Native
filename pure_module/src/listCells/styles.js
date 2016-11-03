import {StyleSheet} from 'react-native';
import colors from '../config/colors';

export default StyleSheet.create({
  cell: {
    paddingTop: 14,
    paddingBottom: 14,
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightwards: {
    height: 16,
    width: 16,
    marginRight: 10,
    tintColor: colors.btDisabledText
  },
  image: {
    width: 34,
    height: 34,
    marginLeft: 6
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 20
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.btDisabledText,
    marginLeft: 10,
    marginRight: 20
  }
});