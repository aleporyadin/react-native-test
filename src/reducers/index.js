import { combineReducers } from 'redux';

const photosReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PHOTOS_SUCCESS':
            return action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    photos: photosReducer,
});
