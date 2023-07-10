import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions';

const HomeScreen = ({ photos, fetchPhotos, navigation }) => {
    useEffect(() => {
        fetchPhotos();
    }, []);

    const renderPhotoItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('Photo', { photo: item })}
                style={styles.photoItemContainer}
            >
                <Image source={{ uri: item.urls.thumb }} style={styles.photoImage} />
                <View style={styles.photoDetails}>
                    <Text style={styles.authorText}>{item.user.name}</Text>
                    {item.description && <Text style={styles.descriptionText}>{item.description}</Text>}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={photos}
                keyExtractor={(item) => item.id}
                renderItem={renderPhotoItem}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    listContent: {
        paddingBottom: 16,
    },
    photoItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 8,
    },
    photoImage: {
        width: 80,
        height: 80,
        borderRadius: 4,
        marginRight: 8,
    },
    photoDetails: {
        flex: 1,
    },
    authorText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    descriptionText: {
        fontSize: 14,
        color: '#666666',
    },
});

const mapStateToProps = (state) => {
    return {
        photos: state.photos,
    };
};

export default connect(mapStateToProps, { fetchPhotos })(HomeScreen);
