import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './navigation';
import { store } from './redux/store';

/**
 * Configure the Store if need we can add persistance also
*/
const App = () => {
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    )
}
export default App;