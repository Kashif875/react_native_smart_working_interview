import { combineReducers } from "@reduxjs/toolkit";
import weatherSlice from './weatherSlice';

const reducers = combineReducers({
    weather: weatherSlice
});

export default reducers;