import {StyleSheet} from 'react-native';
import {dimensions} from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: dimensions.offset.normal,
  },
  userAvatar: {
    height: 300,
    width: '100%',
    aspectRatio: 1,
  },
});
