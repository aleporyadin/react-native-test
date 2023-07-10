import React from 'react';
import {
    Animated,
    SafeAreaView, Text,
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import PhotoScreen from './src/screens/PhotoScreen';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

function App() {


    const Stack = createNativeStackNavigator();
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Welcome'}}/>
                        <Stack.Screen name="Photo" component={PhotoScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
    );
}

export default App;
