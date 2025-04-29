import { CommonActions } from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        CommonActions.navigate({
            name: routeName,
            params,
        })
    );
}

function navigateAndClearHistory(routeName, params) {
    _navigator.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: routeName, params }],
        })
    );
}

function getNavigator() {
    return _navigator
}

function getCurrentRoute() {
    let route = _navigator.state.nav;
    while (route.routes) {
        route = route.routes[route.index];
    }
    return route;
}

export default {
    navigate,
    setTopLevelNavigator,
    getNavigator,
    navigateAndClearHistory,
    getCurrentRoute
};
