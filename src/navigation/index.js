import React from 'react'
import ShareAlbum from '../components/ShareAlbum'
import Albums from '../components/Albums'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Albums' component={Albums} />
            <Stack.Screen name='ShareAlbum' component={ShareAlbum} />
        </Stack.Navigator>
    )
}

export default Navigation
