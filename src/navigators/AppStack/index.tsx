import React, {FC} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import EventDetailsScreen from '../../features/Home/screens/EventDetailsScreen';
import EventsListScreen from '../../features/Home/screens/EventsListScreen';
import {StackParamList} from '../../models/navigation';

const Stack = createNativeStackNavigator<StackParamList>();

const options: Record<string, NativeStackNavigationOptions> = {
  eventsList: {headerShown: false},
  eventDetails: {headerTitle: 'Details'},
};

const AppStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName="EventsList">
      <Stack.Screen
        name="EventsList"
        component={EventsListScreen}
        options={options.eventsList}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={options.eventDetails}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
