import React, {FC} from 'react';
import FastImage from 'react-native-fast-image';
import {createImageProgress} from 'react-native-image-progress';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Loader, TextWrapper} from '../../../../components';
import {StackParamList} from '../../../../models/navigation';
import {styles} from './styles';

type Props = NativeStackScreenProps<StackParamList, 'EventDetails'>;

const Image = createImageProgress(FastImage);

const EventDetailsScreen: FC<Props> = ({route}) => {
  const {avatarUrl, login, orgLogin, orgUrl, eventType} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri: avatarUrl}}
        style={styles.userAvatar}
        indicator={Loader}
      />
      <TextWrapper>Username: {login}</TextWrapper>
      <TextWrapper>Type of user's action: {eventType}</TextWrapper>
      {orgLogin && <TextWrapper>Organisation: {orgLogin}</TextWrapper>}
      {orgUrl && <TextWrapper>Organisation url: {orgUrl}</TextWrapper>}
    </SafeAreaView>
  );
};
export default EventDetailsScreen;
