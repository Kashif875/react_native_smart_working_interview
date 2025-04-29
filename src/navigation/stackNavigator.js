import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { LoadingIndicator } from '../components/loadingIndicator';
import { loaderRef } from '../refs/loaderRef';
import Screens from './screens';
import styles from './styles';

const screensConfig = [
  Screens.Splash,
  Screens.Home,
];

const StackNavigator = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loaderRef.current = {
      show: () => setLoading(true),
      hide: () => setLoading(false),
    };
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator
        initialRouteName={screensConfig[0].name}
        screenOptions={{ headerShown: false }}>
        {screensConfig.map(it => {
          return <Stack.Screen key={it.name} name={it.name} component={it} />;
        })}
      </Stack.Navigator>

      {/**
       * Global loaded handled with refs.
      */}
      {loading && <LoadingIndicator />}

    </SafeAreaView>
  );
};

export default StackNavigator;
