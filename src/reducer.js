import {CATEGORY_SELECT} from './constants/actionTypes'

export default (state = { selectedTour:[] }, action) => {
    switch (action.type) {
        case CATEGORY_SELECT:
            return {
                selectedTour: action.payload
            }
        default:
            return state;
    }


};