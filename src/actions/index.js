import axios from 'axios';

export const fetchPhotos = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043'
            );
            console.log("Data: ", response.data)
            dispatch({ type: 'FETCH_PHOTOS_SUCCESS', payload: response.data });
        } catch (error) {
            console.error(error);
        }
    };
};
