import React, {FC, memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {format} from 'date-fns';
import {TextWrapper} from '../../../../components';
import {styles} from './styles';

type Props = {
  userLogin: string;
  userUrl: string;
  eventType: string;
  createdAt: string;
  repoName: string;
  repoUrl: string;
  onPress: () => void;
};

const Event: FC<Props> = ({
  userLogin,
  userUrl,
  eventType,
  createdAt,
  repoName,
  repoUrl,
  onPress,
}) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.header}>
          <TextWrapper style={styles.nickname}>@{userLogin}</TextWrapper>
          <TextWrapper>{userUrl}</TextWrapper>
        </View>
        <TextWrapper>Event type: {eventType}</TextWrapper>
        <TextWrapper>Repo Name: {repoName}</TextWrapper>
        <TextWrapper numberOfLines={1}>Repo URL: {repoUrl}</TextWrapper>
        <TextWrapper>Created at: {createdAt}</TextWrapper>
      </TouchableOpacity>
    </View>
  );
};

export default memo(Event);
