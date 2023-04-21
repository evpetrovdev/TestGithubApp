import {StyleSheet} from 'react-native';
import {dimensions, text} from '../../../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: dimensions.offset.small,
  },
  listHeader: {
    fontSize: text.size.big,
    fontWeight: text.weight.bold,
    marginBottom: dimensions.offset.normal,
    textAlign: 'center',
  },
  separator: {
    marginBottom: dimensions.offset.tiny,
  },
  noItems: {
    fontSize: text.size.middle,
    fontWeight: text.weight.bold,
    textAlign: 'center',
  },
  listContainer: {
    marginVertical: dimensions.offset.normal,
    width: '100%',
  },
});
