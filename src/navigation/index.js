import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import NavigationService from './NavigationService';
import StackNavigator from './stackNavigator';

/**
 * Configure the Stack Navigator
*/
const AppRoutes = () => {

    const navigationRef = useRef();

    useEffect(() => {
        NavigationService.setTopLevelNavigator(navigationRef.current);
    }, []);

    return (
        <NavigationContainer ref={navigationRef}>
            <StackNavigator />
        </NavigationContainer>
    );
};

/**
 * We can use this function for the non react component
 * to navigate between screens.
*/
export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

export default AppRoutes;
