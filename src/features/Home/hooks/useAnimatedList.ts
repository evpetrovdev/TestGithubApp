import {useEffect} from 'react';
import {withTiming} from 'react-native-reanimated';
import useAnimatedStyleProperty from '../../../common/hooks/useAnimatedStyleProperty';

const useAnimatedOpacity = (animationDuration = 300) => {
  const {animatedValue: opacityValue, animatedStyle: animatedOpacityStyle} =
    useAnimatedStyleProperty('opacity', 0);

  useEffect(() => {
    opacityValue.value = withTiming(1, {duration: animationDuration});
  }, [opacityValue, animationDuration]);

  return {animatedOpacityStyle};
};

export default useAnimatedOpacity;
