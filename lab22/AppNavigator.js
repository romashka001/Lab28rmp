// AppNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OtherScreen from './OtherScreen';
import LifecycleComponent from "./LifecycleComponent";
import Counter from "./Counter";
import Timer from "./Timer";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Life..." component={LifecycleComponent}/>
            <Tab.Screen name="Counter" component={Counter}/>
            <Tab.Screen name="Timer" component={Timer}/>
            <Tab.Screen name="OtherScreen" component={OtherScreen}/>
        </Tab.Navigator>
    );
};

export default AppNavigator;
