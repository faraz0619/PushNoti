import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import Permission from './Permisssion'

const App = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen}/>
                <Stack.Screen name='Permission' component={Permission}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})