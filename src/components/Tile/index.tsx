import React, {FC, PropsWithChildren} from 'react';
import {View, ViewProps} from 'react-native';
import {styles} from './styles';

const Tile: FC<PropsWithChildren<ViewProps>> = ({children, style}) => {
  return (
    <View style={[styles.container, styles.shadow, style]}>{children}</View>
  );
};

export default Tile;
