import {StyleSheet} from 'react-native';
import {colors, dimensions, text} from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    padding: dimensions.offset.small,
    margin: dimensions.offset.tiny,
  },
  header: {
    alignItems: 'center',
    marginBottom: dimensions.offset.small,
  },
  nickname: {
    fontWeight: text.weight.medium,
  },
  shadow: {
    borderRadius: dimensions.borderRadius.big,
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: colors.black,
  },
});
