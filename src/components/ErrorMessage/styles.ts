import {StyleSheet} from 'react-native';
import {colors, dimensions} from '../../constants';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.error,
    backgroundColor: colors.errorLight,
    paddingVertical: dimensions.offset.small,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: dimensions.borderRadius.small,
  },
  text: {
    color: colors.error,
    marginHorizontal: dimensions.offset.tiny,
  },
});

export default styles;
