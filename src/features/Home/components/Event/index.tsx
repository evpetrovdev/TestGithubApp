import React, {FC} from 'react';
import {View} from 'react-native';
import {format} from 'date-fns';
import {TextWrapper, Tile} from '../../../../components';
import {IEvent} from '../../../../models/types';
import {styles} from './styles';

const Event: FC<IEvent> = ({
  actor: {login, url},
  repo: {name, url: repoUrl},
  type,
  created_at,
}) => {
  return (
    <Tile>
      <View style={styles.header}>
        <TextWrapper style={styles.nickname}>@{login}</TextWrapper>
        <TextWrapper>{url}</TextWrapper>
      </View>
      <TextWrapper>Event type: {type}</TextWrapper>
      <TextWrapper>Repo Name: {name}</TextWrapper>
      <TextWrapper>Repo URL: {repoUrl}</TextWrapper>
      <TextWrapper>{format(new Date(created_at), 'yyyy-MM-dd')}</TextWrapper>
    </Tile>
  );
};

export default Event;
