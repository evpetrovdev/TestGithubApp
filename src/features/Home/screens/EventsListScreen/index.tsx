import React, {FC} from 'react';
import {FlatList, ListRenderItem, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ErrorMessage, Loader, TextWrapper} from '../../../../components';
import {StackParamList} from '../../../../models/navigation';
import {IEvent} from '../../../../models/types';
import Event from '../../components/Event';
import useAnimatedOpacity from '../../hooks/useAnimatedList';
import useGithubEvents from '../../hooks/useGithubEvents';
import {styles} from './styles';

const ListHeaderComponent: FC = () => {
  return <TextWrapper style={styles.listHeader}>Events</TextWrapper>;
};

const ListEmptyComponent: FC = () => {
  return <TextWrapper style={styles.noItems}>No items</TextWrapper>;
};

const keyExtractor = (item: IEvent) => {
  return item.id;
};

const ItemSeparatorComponent: FC = () => {
  return <View style={styles.separator} />;
};

type Props = NativeStackScreenProps<StackParamList, 'EventsList'>;

const EventsListScreen: FC<Props> = ({navigation}) => {
  const {
    isRefreshing,
    events,
    error,

    refreshEvents,
  } = useGithubEvents();
  const {animatedOpacityStyle} = useAnimatedOpacity();

  const renderEvent: ListRenderItem<IEvent> = ({item}) => {
    const navigateToDetails = () => {
      navigation.navigate('EventDetails', {
        avatarUrl: item.actor.avatar_url,
        login: item.actor.display_login,
        orgLogin: item.org?.login,
        orgUrl: item.org?.url,
        eventType: item.type,
      });
    };

    return (
      <TouchableOpacity onPress={navigateToDetails}>
        <Event {...item} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.listContainer, animatedOpacityStyle]}>
        {error ? (
          <ErrorMessage visible={!!error} message={error} />
        ) : (
          <FlatList
            data={events}
            renderItem={renderEvent}
            onRefresh={refreshEvents}
            refreshing={isRefreshing}
            ListHeaderComponent={ListHeaderComponent}
            ItemSeparatorComponent={ItemSeparatorComponent}
            ListEmptyComponent={ListEmptyComponent}
            keyExtractor={keyExtractor}
          />
        )}
      </Animated.View>
    </SafeAreaView>
  );
};
export default EventsListScreen;
