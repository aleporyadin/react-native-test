import React from 'react';
import { View, Image } from 'react-native';

const PhotoScreen = ({ route }) => {
    const { photo } = route.params;

    return (
        <View>
            <Image source={{ uri: photo.urls.full }} style={{ width: '100%', height: '100%' }} />
        </View>
    );
};

export default PhotoScreen;
